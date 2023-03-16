const mongoose = require('mongoose')

const ForumQuestionSchema = new mongoose.Schema({
  user: {
    type: String,
    unique: false,
  },
  question: {
    type: String,
    maxlength: 100,
  },
  timePosted: {
    type: Date,
    default: Date.now(),
  },
})

const QuestionModel = mongoose.model('QuestionModel', ForumQuestionSchema)

module.exports = QuestionModel
