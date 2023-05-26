const { Product } = require("../db/modelProduct");

const listProducts = async () => {
  const result = await Product.find({});
  return result;
};

const getProductById = async (productId) => {
  return Product.findById(productId);
};

const addProduct = async (body) => {
  const { name, email, phone, favorite } = body;
  return Product.create({ name, email, phone, favorite });
};

module.exports = {
  listProducts,
  getProductById,
  addProduct,
};
