const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  href: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Shop = model("shop", shopSchema);

module.exports = { Shop };
