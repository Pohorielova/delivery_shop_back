const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true,
  },
  shop: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
  },
});

const Product = model("product", productSchema);

module.exports = { Product };
