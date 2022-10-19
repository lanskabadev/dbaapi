const mongoose = require("mongoose");

var CadCategorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CadCategory", CadCategorySchema);
