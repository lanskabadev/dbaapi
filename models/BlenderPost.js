const mongoose = require("mongoose");

const BlenderSchema = new mongoose.Schema(
  {
    title: {
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
    imgId: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlenderPost", BlenderSchema);
