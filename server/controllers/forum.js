const QuestionModel = require('../models/Question')
const ErrorResponse = require('../utils/errorResponse')

exports.postQuestion = async (req, res, next) => {
  const { user, question } = req.body

  if (!question || !user) {
    return next(new ErrorResponse('Please provide data', 400))
  }

  try {
    const postedQuestion = await QuestionModel.create({
      user,
      question,
    })
    res.status(201).send({
      status: true,
      message: postedQuestion,
    })
  } catch (error) {
    next(error)
  }
}

exports.getQuestions = (req, res, next) => {
  res.status(200).send({
    success: true,
  })
}

exports.postAnswer = (req, res, next) => {
  res.status(200).send({
    success: true,
  })
}

exports.getAnswers = (req, res, next) => {
  res.status(200).send({
    success: true,
  })
}
