const Products = require("../../models/products");

const path = require("path");
const fs = require("fs");
const updateProduct = async (req, res) => {
  console.log("Updating product");
  console.log(req.body);
  const productID = req.body.productID;

  try {
    const existingProduct = await Products.findById(productID);

    if (!existingProduct) {
      return res.status(404).json({ error: "Site not found" });
    }

    // Check if a new image is uploaded
    let newImagePath, newImage;
    console.log(req.file);
    if (req.file) {
      // New image is uploaded
      newImagePath = req.folderName;
      newImage = req.file.originalname;

      // Delete old folder and image if they exist
      if (existingProduct.imagePath && existingProduct.image) {
        const oldImagePath = path.join(
          __dirname,
          "public",
          "Products",
          existingProduct.imagePath,
          existingProduct.image
        );

        try {
          // Delete the image
          fs.unlinkSync(oldImagePath);
          console.log("Deleted old image:", oldImagePath);

          // Delete the folder (if it's empty)
          fs.rmdirSync(
            path.join(__dirname, "public", "Products", existingProduct.imagePath)
          );
          console.log("Deleted old folder:", existingProduct.imagePath);
        } catch (error) {
          console.error("Error deleting old image or folder:", error);
        }
      }
    } else {
      // No new image, use existing image details
      newImagePath = existingProduct.imagePath;
      newImage = existingProduct.image;
    }
    console.log(req.body.vendor);
    const updatedData = {
      name: req.body.name || existingProduct.name,
      creator: req.body.creator || existingProduct.creator,
      assignedTo: req.body.assignedTo || existingProduct.assignedTo,
      description: req.body.description || existingProduct.description,
      status: req.body.status || existingProduct.status,
      vendor: req.body.vendor || existingProduct.vendor,
      rejectionReason: req.body.rejectionReason || existingProduct.rejectionReason,
    
      lastChanged: req.body.lastChanged || existingProduct.lastChanged,
 
      type: req.body.type || existingProduct.type,
      imagePath: newImagePath,
      image: newImage,
    };

    // Update the data in the database
    const updatedSite = await Products.findByIdAndUpdate(productID, updatedData, {
      new: true,
    });

    console.log("Product updated");
    res.status(200).json({ message: "Poduct updated successfully" });
  } catch (error) {
    console.error("Error updating Product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = updateProduct;