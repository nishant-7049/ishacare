const express = require("express");
const { createQuote, readQuote, updateQuote } = require("../controllers/quote");
const router = express.Router();

router.route("/create").post(createQuote);
router.route("/get").get(readQuote);
router.route("/put").put(updateQuote);

module.exports = router;
