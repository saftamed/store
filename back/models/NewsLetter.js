const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("New", NewsSchema);