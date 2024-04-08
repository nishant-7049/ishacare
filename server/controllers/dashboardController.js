const catchAsyncError = require("../middleware/catchAsyncFunc");
const Booking = require("../models/booking");

exports.getPatientMeterData = catchAsyncError(async (req, res, next) => {
  const patientsData = await Booking.aggregate([
    {
      $lookup: {
        from: "treatments",
        localField: "_id",
        foreignField: "booking",
        as: "treatments",
      },
    },
    {
      $unwind: "$treatments",
    },
    {
      $sort: { "treatments.createdAt": -1 },
    },
    {
      $lookup: {
        from: "sessions",
        localField: "treatments._id",
        foreignField: "treatmentId",
        as: "session",
      },
    },
    {
      $unwind: "$session",
    },
    {
      $sort: { "session.createdAt": -1 },
    },
    {
      $group: {
        _id: {
          name: "$personal.name",
          phone: "$personal.phone",
        },
        cluster: { $last: "$personal.city" },
        location: { $last: "$personal.location" },
        problem: { $last: "$complaints.problem" },
        sessions: { $push: "$session" },
      },
    },
    {
      $project: {
        _id: 0,
        name: "$_id.name",
        phone: "$_id.phone",
        cluster: "$cluster",
        location: "$location",
        problem: "$problem",
        sessions: "$sessions",
      },
    },
  ]);
  res.status(200).json({
    success: true,
    patientsData,
  });
});

eexports.getCentreData = catchAsyncError(async (req, res, next) => {
  let startDate, endDate;
  const interval = req.body.interval;
  const cluster = req.body.cluster;
  const year = req.body.year;
  const month = req.body.month;

  switch (interval) {
    case "year":
      break;
    case "month":
      if (!year)
        return res
          .status(403)
          .json({ success: false, message: "year not specified" });
      startDate = `${year}-01-01`;
      endDate = `${parseInt(year) + 1}-01-01`;
      break;
    case "day":
      if (!year)
        return res
          .status(403)
          .json({ success: false, message: "year not specified" });
      if (!month)
        return res
          .status(403)
          .json({ success: false, message: "month not specified" });
      startDate = `${year}-${month}-01`;
      endDate = `${year}-${month + 1}-01`;
      break;
    default:
      return res
        .status(403)
        .json({ success: false, message: "invalid interval" });
  }

  const dateFilter = {
    $gte: new Date(startDate),
    $lt: new Date(endDate),
  };

  const bookings = await Booking.aggregate([
    {
      $lookup: {
        from: "treatments",
        localField: "_id",
        foreignField: "booking",
        as: "treatments",
      },
    },
    {
      $sort: { "treatments.createdAt": -1 },
    },
    {
      $lookup: {
        from: "sessions",
        localField: "treatments._id",
        foreignField: "treatmentId",
        as: "treatmentSessions",
      },
    },
    {
      $sort: { "treatmentSessions.createdAt": -1 },
    },
    {
      $sort: { createdAt: -1 },
    },
    {
      $match: {
        createdAt: interval === "year" ? { $exists: true } : dateFilter,
      },
    },
    {
      $addFields: {
        lastTreatmentSession: {
          $arrayElemAt: [
            {
              $filter: {
                input: "$treatmentSessions",
                cond: { $eq: ["$$this.isOutcomeFormSent", true] },
              },
            },
            -1,
          ],
        },
      },
    },
    {
      $match: cluster
        ? {
            "personal.city": cluster,
          }
        : {},
    },
    {
      $group: {
        _id: "$personal.location",
        count: { $sum: 1 },
        collectionAmt: { $sum: "$price" },
        usersLeft: {
          $sum: {
            $cond: {
              if: { $eq: [{ $type: "$lastTreatmentSession" }, "object"] },
              then: 1,
              else: 0,
            },
          },
        },
      },
    },
  ]);
  res.status(200).json({
    success: true,
    bookings,
  });
});

exports.getTherapistPerformance = catchAsyncError(async (req, res, next) => {
  const bookings = await Booking.aggregate([
    {
      $match: {
        assignTherapist: { $eq: req.user._id },
      },
    },
    {
      $lookup: {
        from: "treatments",
        localField: "_id",
        foreignField: "booking",
        as: "treatments",
      },
    },
    { $sort: { "treatments.createdAt": -1 } },
    {
      $lookup: {
        from: "sessions",
        localField: "treatments._id",
        foreignField: "treatmentId",
        as: "treatmentSessions",
      },
    },
    {
      $sort: { "treatmentSessions.createdAt": -1 },
    },
    {
      $project: {
        _id: "$_id",
        sessions: "$treatmentSessions",
        problem: "$complaints.problem",
      },
    },
  ]);
  res.status(200).json({
    success: true,
    bookings,
  });
});
exports.getFacilitatorPerformance = catchAsyncError(async (req, res, next) => {
  const bookings = await Booking.aggregate([
    {
      $match: {
        assignFacilitator: { $eq: req.user._id },
      },
    },
    {
      $lookup: {
        from: "treatments",
        localField: "_id",
        foreignField: "booking",
        as: "treatments",
      },
    },
    { $sort: { "treatments.createdAt": -1 } },
    {
      $lookup: {
        from: "sessions",
        localField: "treatments._id",
        foreignField: "treatmentId",
        as: "treatmentSessions",
      },
    },
    {
      $sort: { "treatmentSessions.createdAt": -1 },
    },
    {
      $project: {
        _id: "$_id",
        sessions: "$treatmentSessions",
        problem: "$complaints.problem",
      },
    },
  ]);
  res.status(200).json({
    success: true,
    bookings,
  });
});

exports.getDropoutsForTherapist = catchAsyncError(async (req, res, next) => {
  const bookings = await Booking.aggregate([
    {
      $match: {
        assignTherapist: { $eq: req.user._id },
      },
    },
    {
      $lookup: {
        from: "treatments",
        localField: "_id",
        foreignField: "booking",
        as: "treatments",
      },
    },
    {
      $unwind: "$treatments",
    },
    {
      $sort: { "treatments.createdAt": -1 },
    },
    {
      $lookup: {
        from: "sessions",
        localField: "treatments._id",
        foreignField: "treatmentId",
        as: "session",
      },
    },
    {
      $unwind: { path: "$session", preserveNullAndEmptyArrays: true },
    },
    {
      $sort: {
        "session.createdAt": -1,
      },
    },
    {
      $group: {
        _id: {
          name: "$personal.name",
          phone: "$personal.phone",
        },
        problem: { $first: "$complaints.problem" },
        latestTreatment: { $first: "$treatments.createdAt" },
        latestSession: { $first: "$session" },
      },
    },
    {
      $project: {
        _id: 0,
        name: "$_id.name",
        phone: "$_id.phone",
        problem: "$problem",
        latestSession: "$latestSession",
      },
    },
  ]);
  res.status(200).json({
    success: true,
    bookings,
  });
});
exports.getDropoutsForFacilitator = catchAsyncError(async (req, res, next) => {
  const bookings = await Booking.aggregate([
    {
      $match: {
        assignFacilitator: { $eq: req.user._id },
      },
    },
    {
      $lookup: {
        from: "treatments",
        localField: "_id",
        foreignField: "booking",
        as: "treatments",
      },
    },
    {
      $unwind: "$treatments",
    },
    {
      $sort: { "treatments.createdAt": -1 },
    },
    {
      $lookup: {
        from: "sessions",
        localField: "treatments._id",
        foreignField: "treatmentId",
        as: "session",
      },
    },
    {
      $unwind: { path: "$session", preserveNullAndEmptyArrays: true },
    },
    {
      $sort: {
        "session.createdAt": -1,
      },
    },
    {
      $group: {
        _id: {
          name: "$personal.name",
          phone: "$personal.phone",
        },
        problem: { $first: "$complaints.problem" },
        latestTreatment: { $first: "$treatments.createdAt" },
        latestSession: { $first: "$session" },
      },
    },
    {
      $project: {
        _id: 0,
        name: "$_id.name",
        phone: "$_id.phone",
        problem: "$problem",
        latestSession: "$latestSession",
      },
    },
  ]);
  res.status(200).json({
    success: true,
    bookings,
  });
});

exports.getTherapistAllSessions = catchAsyncError(async (req, res, next) => {
  const sessions = await Booking.aggregate([
    {
      $match: {
        assignTherapist: { $eq: req.user._id },
      },
    },
    {
      $lookup: {
        from: "treatments",
        localField: "_id",
        foreignField: "booking",
        as: "treatments",
      },
    },
    {
      $unwind: "$treatments",
    },
    {
      $lookup: {
        from: "sessions",
        localField: "treatments._id",
        foreignField: "treatmentId",
        as: "treatmentSessions",
      },
    },
    {
      $unwind: "$treatmentSessions",
    },
    {
      $group: {
        _id: {
          name: "$personal.name",
          phone: "$personal.phone",
        },
        sessions: { $push: "$treatmentSessions" },
      },
    },
    {
      $project: {
        _id: 0,
        name: "$_id.name",
        phone: "$_id.phone",
        sessions: "$sessions",
      },
    },
  ]);
  res.status(200).json({
    success: true,
    sessions,
  });
});
exports.getFacilitatorAllSessions = catchAsyncError(async (req, res, next) => {
  const sessions = await Booking.aggregate([
    {
      $match: {
        assignFacilitator: { $eq: req.user._id },
      },
    },
    {
      $lookup: {
        from: "treatments",
        localField: "_id",
        foreignField: "booking",
        as: "treatments",
      },
    },
    {
      $unwind: "$treatments",
    },
    {
      $lookup: {
        from: "sessions",
        localField: "treatments._id",
        foreignField: "treatmentId",
        as: "treatmentSessions",
      },
    },
    {
      $unwind: "$treatmentSessions",
    },
    {
      $group: {
        _id: {
          name: "$personal.name",
          phone: "$personal.phone",
        },
        sessions: { $push: "$treatmentSessions" },
      },
    },
    {
      $project: {
        _id: 0,
        name: "$_id.name",
        phone: "$_id.phone",
        sessions: "$sessions",
      },
    },
  ]);
  res.status(200).json({
    success: true,
    sessions,
  });
});
