const { addOrder } = require("../models/orders");

const addOrderAction = async (req, res, next) => {
  try {
    const newOrder = await addOrder({
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      cartItems: req.body.cartItems,
    });
    return res.status(201).json(newOrder);
  } catch (error) {
    console.log(error.message);
    next(error.message);
  }
};

module.exports = {
  addOrderAction,
};
