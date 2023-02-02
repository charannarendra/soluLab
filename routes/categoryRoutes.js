const express = require("express");
const router = express.Router();
const category = require("../controlers/categoryControlers");

router.post("/cateCreate", category.createCategory);
router.get("/cateList", category.categoryList);
router.patch("/cateUpdate/:id", category.categoryUpdate);
router.delete("/cateDelete/:id", category.categoryDelete);

module.exports = router;
