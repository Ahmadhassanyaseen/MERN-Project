const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  post: String,
  password: String,
  phoneNumber: String,
  imagePath: String,
  image: String, // Store the image as binary data
},
  { timestamps: true });

const Users = new mongoose.model("Users", userSchema);

module.exports = Users;
