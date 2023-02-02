const mongoose = require("mongoose");

const cateSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    require: true,
  },
  isActive: {
    type: String,
    require: true,
  },
});
cateSchema.set("timestamps", true);
module.exports = mongoose.model("category", cateSchema);
