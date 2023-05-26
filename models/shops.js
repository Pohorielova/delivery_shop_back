const { Shop } = require("../db/modelShop");

const listShops = async () => {
  const result = await Shop.find({});
  return result;
};

module.exports = {
  listShops,
};
