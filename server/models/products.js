const mongoose = require("mongoose");
const date = new Date();

// ✅ DD/MM/YYYY
const result1 = new Date().toLocaleDateString("en-GB");
// console.log(result1); // 👉️ 24/07/2023

const productSchema = new mongoose.Schema(
  {
    name: String,
    creator: String,
    assignedTo: String,
    status: String,
    type: String,
    vendor: String,
    imagePath: String,
    image: Array,
    description: String,
    rejectionReason: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
