const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  timeSpent: {
    min: {
      type: Number,
      required: true,
    },
    sec: {
      type: Number,
      required: true,
    },
  },
  startedAt: {
    type: Date,
    required: true,
  },
  endedAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  treatmentId: mongoose.Schema.Types.ObjectId,
  questions: {
    psr: Number,
    satisfaction: Number,
    questions: String,
    feedback: String,
    weight: Number,
    bp: String,
    sugar: String,
    functionality: Boolean,
    facilitatorRating: {
      type: Number,
      max: 5,
      min: 0,
    },
  },
  isOutcomeFormSent: {
    type: Boolean,
    default: false,
  },
});

const sessionModel = mongoose.model("sessions", sessionSchema);

module.exports = sessionModel;
