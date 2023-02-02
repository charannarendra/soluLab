const express = require("express");
const router = express.Router();
const category = require("./categoryRoutes");
const product = require("./productRoutes");

router.use("/category", category);
router.use("/product", product);

module.exports = router;
