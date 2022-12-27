const mongoose = require('mongoose')

//Incharge
const inchargeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  Phone: Number,
  Experience: Number,
  clinicsUnder: String,
  clincsUnder: [String],
})

const Incharge = mongoose.model('Incharge', inchargeSchema)

module.exports = Incharge
