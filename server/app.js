const express = require('express')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017/ishaDB');

const app = express()



app.listen(3001, () => {
    console.log('Server Started at port 3001');
})

