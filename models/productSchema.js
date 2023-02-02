const mongoose = require("mongoose");

const prodSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  qtyPerUnit: {
    type: String,
    require: true,
  },
  unitPrice: {
    type: String,
    require: true,
  },
  unitInStock: {
    type: String,
    require: true,
  },
  discontinued: {
    type: Boolean,
    require: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    require: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
prodSchema.set("timestamps", true);
module.exports = mongoose.model("product", prodSchema);
