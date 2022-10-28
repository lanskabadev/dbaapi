const mongoose = require("mongoose");

const AnsysPostSchema = new mongoose.Schema(
  {
    catId: {
      type: String,
    },
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
    gif: {
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

module.exports = mongoose.model("AnsysPost", AnsysPostSchema);
