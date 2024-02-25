const Items = require("../../models/item");
const path = require("path");
const fs = require("fs");
const updateItem = async (req, res) => {
  try {
    const itemID = req.params.id;
    

    if (!itemID) {
      return res.status(400).json({ error: "itemID is required" });
    }

    const existingitem = await Items.findById(itemID);

    if (!existingitem) {
      return res.status(404).json({ error: "item not found" });
    }

    let updatedData = {};

    if (req.body && typeof req.body === "object") {
      updatedData = {
        name: req.body.name || existingitem?.name || "",
        batch: req.body.batch || existingitem?.batch || "",
        tags: req.body.tags.split(",") || existingitem?.tags.split(",") || "",
        status: req.body.status || existingitem?.status || "",
      };
    }

    let newImagePath = existingitem?.imagePath;
    let newImage = existingitem?.image;

    // Check if a new image is uploaded
    if (req.file) {
      newImagePath = req.folderName;
      newImage = req.file.originalname;
      const currentDirectory = __dirname;
      const parentDirectory = path.join(currentDirectory, "../..");
      // Delete old image if it exists
      if (existingitem?.imagePath && existingitem?.image) {
        const oldImagePath = path.join(
          parentDirectory,
          "public",
          "Items",
          existingitem.imagePath,
          existingitem.image
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
              "Items",
              existingitem.imagePath
            )
          );
          console.log("Deleted old folder:", existingitem.imagePath);
        } catch (error) {
          console.error("Error deleting old image or folder:", error);
        }
      }
    }

    updatedData.imagePath = newImagePath;
    updatedData.image = newImage;

    // Update the data in the database
    const updateditem = await Items.findByIdAndUpdate(itemID, updatedData, {
      new: true,
    });

    console.log("item updated:", updateditem);
    res.status(200).json({ message: "item updated successfully" });
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = updateItem;
