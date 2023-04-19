const mongoose = require("mongoose");
const Schema = mongoose.Schema

// Create a Mongoose model for requester
const requestSchema = new mongoose.Schema({
  category:{
    type: String,
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  quanitty: {
    type: Number,
    required: true
  },
  requesterID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'requester'
  }

});



module.exports = mongoose.model('Request', requestSchema)
