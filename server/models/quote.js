const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
});

const quote = mongoose.model("Quote", quoteSchema);
module.exports = quote;
