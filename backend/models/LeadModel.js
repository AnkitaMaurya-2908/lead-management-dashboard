const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    status: {
      type: String,
      enum: ["New", "Contacted", "Converted"],
      default: "New",
    },
    stage: {
      type: String,
      enum: ["Cold", "Warm", "Hot"],
      default: "Cold",
    },
    source: {
      type: String,
      default: "Website",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
