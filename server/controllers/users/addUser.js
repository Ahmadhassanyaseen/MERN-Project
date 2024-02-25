const Users = require("../../models/users");
const path = require("path");
const upload = require("../storage/userStorage");

const addUser = 
  async (req, res, next) => {
    const userData = req.body;
    const imageName = req.file.filename;

    console.log(imageName);
    console.log(userData);

    const newUser = new Users(userData);

    // Retrieve the stored folderName from the request object
    const folderName = req.folderName;

    // Store the image path in the database
    const imageData = path.join(imageName);
    newUser.image = imageData;
    const imagePath = path.join(folderName);
    newUser.imagePath = imagePath;

    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
      console.log("User saved");
    } catch (error) {
      console.error("Error saving User:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

module.exports = addUser;
