const categorySchema = require("../models/categorySchema");

const createCategory = async (req, res) => {
  const category = new categorySchema(req.body);
  try {
    const saveCategory = await category.save();
    res.status(201).json({
      status: "Success",
      message: "create Category Successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const categoryList = async (req, res) => {
  try {
    const list = await categorySchema.find({});
    res.status(200).json({
      status: "Success",
      listCategory: list,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const categoryUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const update = await categorySchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "Success",
      message: "Category Updated",
      updateCate: update,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const categoryDelete = async (req, res) => {
  const id = req.params.id;
  try {
    const delet = await categorySchema.findByIdAndDelete(id);
    res.status(200).json({
      status: "Success",
      message: "Category Deleted",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
module.exports = {
  createCategory,
  categoryList,
  categoryUpdate,
  categoryDelete,
};
