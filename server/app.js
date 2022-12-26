const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017/ishaDB');

const app = express()
app.use(cors())
app.use(express.json())


app.post('/api/register', (req,res)=>{
    console.log(req.body);
    res.json({status: 'ok'})
})


app.listen(3001, () => {
    console.log('Server Started at port 3001');
})
