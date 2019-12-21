const mongoose = require("mongoose");

const orderSchemas = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  city: {type: String, required: true},
  orderId: {type: Number, required: true},
  time: Date,
  restaurentId:String,
  date:  { type: Date, default: Date.now },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const orderSchema = mongoose.model("Order", orderSchemas);

module.exports = orderSchema;
