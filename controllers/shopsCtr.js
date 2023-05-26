const { listShops } = require("../models/shops");

const getShopsListAction = async (req, res, next) => {
  try {
    let { page = 1, limit = 20 } = req.query;
    limit = limit > 20 ? 20 : limit;
    const skipAmount = (page - 1) * limit;

    const ShopsList = await listShops({
      skipAmount,
      limit,
    });
    return res.status(200).json(ShopsList);
  } catch (error) {
    next(error.message);
  }
};

module.exports = {
  getShopsListAction,
};
