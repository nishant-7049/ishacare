const mongoose = require('mongoose')

const ForumAnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    maxlength: 300,
  },
  question: String,
  timePosted: {
    type: Date,
    default: Date.now(),
  },
})

const AnswerModel = mongoose.model('AnswerModel', ForumAnswerSchema)

module.exports = AnswerModel
