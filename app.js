const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const url = 'mongodb://localhost/Supply_Database'
const app = express()

app.use(cors())

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
  console.log("connected")
})



app.use(express.json())

const requestersRouter = require('./routes/requesters')
app.use('/requesters', requestersRouter)
const requestsRouter = require('./routes/requests')
app.use('/requests', requestsRouter)
const testsRouter = require('./routes/tests')
app.use('/tests', testsRouter)
app.listen(4000, () => {
  console.log('Server started')
})