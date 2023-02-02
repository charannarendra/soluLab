const productSchema = require("../models/productSchema");

const createProduct = async (req, res) => {
  const product = new productSchema(req.body);
  try {
    const productSave = await product.save();
    res.status(201).json({
      status: "Success",
      message: " Created Product Successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const productList = async (req, res) => {
  try {
    const list = await productSchema.find({});
    res.status(200).json({
      status: "Success",
      listProd: list,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const productUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const update = await productSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "Success",
      message: "Product Updated",
      updateProd: update,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",  
      message: err.message,
    });
  }
};

const productDelet = async (req, res) => {
  const id = req.params.id;
  try {
    const delet = await productSchema.findByIdAndDelete(id);
    res.status(200).json({
      status: "Success",
      message: "Product Deleted",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports = {
  createProduct,
  productList,
  productUpdate,
  productDelet,
};
