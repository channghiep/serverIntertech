const mongoose = require("mongoose");

// Create a Mongoose model for requester
const requesterSchema = new mongoose.Schema({
  requester:{
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  }

});



module.exports = mongoose.model('Requester', requesterSchema)
