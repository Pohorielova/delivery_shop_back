const { Order } = require("../db/modelOrder");

const listOrders = async () => {
  const result = await Order.find({});
  return result;
};

const getOrderById = async (orderId) => {
  return Order.findById(orderId);
};

const removeOrder = async (orderId) => {
  return Order.findByIdAndRemove(orderId);
};

const addOrder = async (body) => {
  const { name, email, phoneNumber, address, cartItems } = body;
  return Order.create({ name, email, phoneNumber, address, cartItems });
};

module.exports = {
  listOrders,
  getOrderById,
  removeOrder,
  addOrder,
};
