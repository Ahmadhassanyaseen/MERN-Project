const mongoose = require("mongoose");

const vendorchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  { timestamps: true }
);

const vendor = new mongoose.model("vendor", vendorchema);

module.exports = vendor;