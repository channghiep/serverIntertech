const mongoose = require("mongoose");

// Create a Mongoose model for supplies
const suppliesSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [{
    itemName: { type: String, required: true },
    quantity: { type: Number, default: 0 }
  }]
});

const SupplyModel = new mongoose.Schema({
  name: { type: String, default: '' },
  client: { type: String, default: '' },
  supplies: [suppliesSchema]
});

module.exports = mongoose.model('Supplies', SupplyModel)
