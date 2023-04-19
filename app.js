require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const url = 'mongodb://localhost/Supply_Database'
const app = express()

app.use(cors())
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}



app.use(express.json())

const requestersRouter = require('./routes/requesters')
app.use('/requesters', requestersRouter)
const requestsRouter = require('./routes/requests')
app.use('/requests', requestsRouter)
const testsRouter = require('./routes/tests')
app.use('/tests', testsRouter)

//Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("listening for requests");
  })
})