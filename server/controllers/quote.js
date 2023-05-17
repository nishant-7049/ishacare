const quotes = require("../models/quote");

exports.createQuote = async (req, res, next) => {
  const Quote = await quotes.create(req.body);
  res.status(201).json({ message: "created Successfull" });
};
exports.readQuote = async (req, res, next) => {
  const Quote = await quotes.find();
  res.status(200).json({ success: true, Quote });
};
exports.updateQuote = async (req, res, next) => {
  const Quote = await quotes.findByIdAndUpdate(
    "6461f7097ae812f570632373",
    req.body,
    { new: true, runValidators: true, useFindAndModify: false }
  );
  res.status(200).json({ success: true, Quote });
};
