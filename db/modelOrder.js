const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  cartItems: {
    type: Array,
    require: false,
  },
  address: {
    type: String,
    minlength: 3,
    maxlength: 30,
    require: false,
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 30,
    require: false,
  },
  email: {
    type: String,
    require: false,
  },
  phoneNumber: {
    type: String,
    require: false,
  },
});

const Order = model("order", orderSchema);

module.exports = { Order };
