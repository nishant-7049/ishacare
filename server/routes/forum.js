const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/auth')

const {
  postQuestion,
  getForumData,
  postAnswer,
} = require('../controllers/forum')

router.route('/getForumData').get(getForumData)
router.route('/postQuestion').post(protect, postQuestion)
router.route('/postAnswer').post(protect, postAnswer)

module.exports = router
