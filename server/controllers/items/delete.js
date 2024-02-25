const Items = require("../../models/item");
const path = require("path");
const FS = require("fs").promises;

const deleteItem = async (req, res) => {
  const itemId = req.params.id;

  try {
    const item = await Items.findById({ _id: itemId });

    if (!item) {
      console.log("Item not found" , itemId);
      return res.status(404).json({ error: "item not found" });
    }

    // Retrieve the image path from the database
    const imagePath = item.imagePath;
    const imageName = item.image;

    // Construct the full file system path for the image
    const currentDirectory = __dirname;
    const parentDirectory = path.join(currentDirectory, "../..");

    const fullImagePath = path.join(
      parentDirectory,
      "public",
      "items",
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
    await Items.findByIdAndDelete(itemId);
    console.log("Removed from database and file system");
    res.status(200).json({ message: "item removed successfully" });
  } catch (error) {
    console.error("Error removing item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = deleteItem;
