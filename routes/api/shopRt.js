const express = require("express");

const router = express.Router();

const { asyncWrapper } = require("../../helpers/apiHelpers");

const { getShopsListAction } = require("../../controllers/shopsCtr");

router.get("/", asyncWrapper(getShopsListAction));

module.exports = router;
