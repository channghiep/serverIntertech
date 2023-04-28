const mongoose = require("mongoose");

// Create a Mongoose model for supplies
clientsSchema = new mongoose.Schema({
  client: { type: String, required: true },
  items: [{
    itemName: { type: String, required: true },
    quantity: { type: Number, default: 0 }
  }]
});

const RequesterModel = new mongoose.Schema({
  requester: { type: String, required: true },
  clients: [clientsSchema],
  date: {type: String, required: true}
});

module.exports = mongoose.model('Tests', RequesterModel)