const mongoose = require("mongoose");

const CADPostSchema = new mongoose.Schema(
  {
    catId: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    preview: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    zip: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CADPost", CADPostSchema);
