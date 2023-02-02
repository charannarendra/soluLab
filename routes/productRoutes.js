const express = require("express");
const router = express.Router();
const product = require("../controlers/productControlers");

router.post("/prodCreate", product.createProduct);
router.get("/prodList", product.productList);
router.patch("/prodUpdate/:id", product.productUpdate);
router.delete("/prodDelet/:id",product.productDelet);

module.exports = router;
