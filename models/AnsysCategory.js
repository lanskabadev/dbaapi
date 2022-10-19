const mongoose = require("mongoose");

var AnsysCategorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AnsysCategory", AnsysCategorySchema);
