const express = require('express')
const router = express.Router()

const {
  postQuestion,
  getQuestions,
  postAnswer,
  getAnswers,
} = require('../controllers/forum')

router.route('/postQuestion').post(postQuestion)
router.route('/getQuestions').get(getQuestions)

router.route('/postAnswer').post(postAnswer)
router.route('/getAnswers').get(getAnswers)

module.exports = router
