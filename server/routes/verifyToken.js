const express = require('express')
const router = express.Router()

const { verifyToken } = require('../controllers/verifyToken')

router.route('/').post(verifyToken)

module.exports = router
