const express = require("express");

const router = express.Router();

const { asyncWrapper } = require("../../helpers/apiHelpers");

const { addOrderAction } = require("../../controllers/ordersCtr");

router.post("/", asyncWrapper(addOrderAction));

module.exports = router;
