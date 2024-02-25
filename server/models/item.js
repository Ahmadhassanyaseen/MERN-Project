const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: String,
    
    tags: Array,
    image: String,
    imagePath: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("item", itemSchema);

module.exports = Item;
