const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    year: {
      type: String,
      default: "",
    },

    desc: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", ResumeSchema);
