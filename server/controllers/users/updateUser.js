const Users = require("../../models/users");
const path = require("path");
const fs = require("fs");
const updateUser = async (req, res) => {
  try {
    const userID = req.body?.userID;
    // console.log(req);

    if (!userID) {
      return res.status(400).json({ error: "userID is required" });
    }

    const existingUser = await Users.findById(userID);

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    let updatedData = {};

    if (req.body && typeof req.body === "object") {
      updatedData = {
        name: req.body.name || existingUser?.name || "",
        email: req.body.email || existingUser?.email || "",
        role: req.body.role || existingUser?.role || "",
        password: req.body.password || existingUser?.password || "",
        phoneNumber: req.body.phoneNumber || existingUser?.phoneNumber || "",
        post: req.body.post || existingUser?.post || "",
      };
    }

    let newImagePath = existingUser?.imagePath;
    let newImage = existingUser?.image;

    // Check if a new image is uploaded
    if (req.file) {
      newImagePath = req.folderName;
      newImage = req.file.originalname;
      const currentDirectory = __dirname;
      const parentDirectory = path.join(currentDirectory, "../..");
      // Delete old image if it exists
      if (existingUser?.imagePath && existingUser?.image) {
        const oldImagePath = path.join(
          parentDirectory,
          "public",
          "users",
          existingUser.imagePath,
          existingUser.image
        );

        try {
          // Delete the image
          fs.unlinkSync(oldImagePath);
          console.log("Deleted old image:", oldImagePath);

          // Delete the folder (if it's empty)
          fs.rmdirSync(
            path.join(
              parentDirectory,
              "public",
              "users",
              existingUser.imagePath
            )
          );
          console.log("Deleted old folder:", existingUser.imagePath);
        } catch (error) {
          console.error("Error deleting old image or folder:", error);
        }
      }
    }

    updatedData.imagePath = newImagePath;
    updatedData.image = newImage;

    // Update the data in the database
    const updatedUser = await Users.findByIdAndUpdate(userID, updatedData, {
      new: true,
    });

    console.log("User updated:", updatedUser);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = updateUser;
