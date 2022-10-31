const mongoose = require("mongoose");

var CAMCategorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CAMCategory", CAMCategorySchema);
