const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Admin = require('./models/admin.model')
const bcrypt = require('bcryptjs')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://0.0.0.0:27017/ishaDB')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/register', async (req, res) => {
  try {
    const newPass = await bcrypt.hash(req.body.password, 10)
    await Admin.create({
      email: req.body.email,
      password: newPass,
    })
    res.json({ status: 'ok' })
  } catch (error) {
    res.json({ status: 'error', error: 'Duplicate email' })
  }
})

app.post('/api/login', async (req, res) => {
  const adminUser = await Admin.findOne({
    email: req.body.email,
  })

  if(!adminUser){
    return res.json({ststus: 'error', error: 'Invalid Login'})
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    adminUser.password
  )

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        email: req.body.email,
        password: req.body.password,
      },
      'secret123'
    )
    return res.json({ status: 'ok', user: token })
  } else {
    return res.json({ status: 'error', user: false })
  }
})

app.get('/api/adminData', async (req, res) => {
  const token = req.headers['x-access-token']

  try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email

    const AdminUser = await Admin.findOne({ email: email })

    return res.json({ status: 'ok', userEmail: AdminUser.email })
  } catch (error) {
    console.log('error')
    res.json({ status: 'error', error: 'Invalid Token' })
  }
})

app.post('/api/verify', async (req, res) => {
  const token = req.body.token
  // console.log(token);
  const user = jwt.decode(token)
  // console.log(user);
  return res.json({ user: user })
})

app.listen(3001, () => {
  console.log('Server Started at port 3001')
})
