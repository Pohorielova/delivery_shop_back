const express = require("express");

const router = express.Router();

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  getProductsListAction,
  getProductByIdAction,
  addProductAction,
} = require("../../controllers/productsCtr");

router.get("/", asyncWrapper(getProductsListAction));
router.get(
  "/:productId",

  asyncWrapper(getProductByIdAction)
);
router.post(
  "/",

  asyncWrapper(addProductAction)
);

module.exports = router;
