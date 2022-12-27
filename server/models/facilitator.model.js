const mongoose = require('mongoose')

//Facilitator
const facilitatorSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  Phone: Number,
  Experience: Number,
  monitoringPatient: Patient,
})

const Facilitator = mongoose.model('Facilitator', facilitatorSchema)

module.exports = Facilitator
