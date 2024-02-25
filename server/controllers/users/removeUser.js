const Users = require("../../models/users");
const path = require("path");
const FS = require("fs").promises;

const removeUser = async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await Users.findById({ _id: userId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Retrieve the image path from the database
    const imagePath = user.imagePath;
    const imageName = user.image;

    // Construct the full file system path for the image
    const currentDirectory = __dirname;
    const parentDirectory = path.join(currentDirectory, "../..");
     
    const fullImagePath = path.join(
      parentDirectory, 
      "public",
      "users",
      imagePath,
      imageName
    );

    // Get the directory containing the image
    const imageDirectory = path.dirname(fullImagePath);

    // Delete the associated image file
    await FS.unlink(fullImagePath);

    // Remove the directory if it's empty after deleting the image
    try {
      await FS.rmdir(imageDirectory);
      console.log("Removed empty directory:", imageDirectory);
    } catch (dirError) {
      console.log("Directory not removed:", dirError);
    }
    await Users.findByIdAndDelete(userId);
    console.log("Removed from database and file system");
    res.status(200).json({ message: "User removed successfully" });
  } catch (error) {
    console.error("Error removing User:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = removeUser;