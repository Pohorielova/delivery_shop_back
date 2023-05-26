const {
  listProducts,
  getProductById,
  addProduct,
} = require("../models/products");

const getProductsListAction = async (req, res, next) => {
  try {
    let { page = 1, limit = 20 } = req.query;
    limit = limit > 20 ? 20 : limit;
    const skipAmount = (page - 1) * limit;

    const ProductsList = await listProducts({
      skipAmount,
      limit,
    });
    return res.status(200).json(ProductsList);
  } catch (error) {
    next(error.message);
  }
};

const getProductByIdAction = async (req, res, next) => {
  try {
    const ProductById = await getProductById(req.params.productId);
    if (!ProductById) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    return res.status(200).json(ProductById);
  } catch (error) {
    next(error.message);
  }
};

const addProductAction = async (req, res, next) => {
  try {
    const newProduct = await addProduct({
      name: req.body.name,
      shop: req.body.shop,
      price: req.body.price,
    });
    return res.status(201).json(newProduct);
  } catch (error) {
    console.log(error.message);
    next(error.message);
  }
};

module.exports = {
  getProductsListAction,
  getProductByIdAction,
  addProductAction,
};
