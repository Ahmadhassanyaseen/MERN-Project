const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    name: String,
    create: Boolean,
    read: Boolean,
    update: Boolean,
    delete: Boolean,
    admin: Boolean,
  },
  { timestamps: true }
);

const role = new mongoose.model("role", roleSchema);

module.exports = role;
