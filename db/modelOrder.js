const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  cartItems: {
    type: Array,
  },
  address: {
    type: String,
    minlength: 3,
    maxlength: 30,
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

const Order = model("order", orderSchema);

module.exports = { Order };
