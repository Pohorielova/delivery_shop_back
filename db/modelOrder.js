const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  cartItems: {
    type: Array,
    required: true,
  },
  address: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true,
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const Order = model("order", orderSchema);

module.exports = { Order };
