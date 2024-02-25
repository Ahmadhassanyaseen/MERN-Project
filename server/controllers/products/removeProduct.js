const Products = require("../../models/products");
const path = require("path");
const FS = require("fs").promises;

const removeProduct = async (req, res) => {
  const productID = req.body.productID;

  try {
    // Fetch the product data from the database
    const product = await Products.findById(productID);

    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }

    // Retrieve the image path and image name from the database
    const imagePath = product.imagePath;
    const imageName = product.image;

    // Construct the full file system path for the image
      const currentDirectory = __dirname;
      const parentDirectory = path.join(currentDirectory, "../..");
      imageName.forEach(async(image)=>{
 const fullImagePath = path.join(
      parentDirectory,
      "public",
      "products",
      imagePath,
      image
    );

    // Delete the associated image file
    await FS.unlink(fullImagePath);
      })
   

    // Remove the directory if it's empty after deleting the image
    const imageDirectory = path.dirname(
      path.join(parentDirectory, "public", "products", imagePath, )
    );
   const filesInDirectory = await FS.readdir(imageDirectory);

   if (filesInDirectory.length === 0) {
     // Remove the directory if it's empty after deleting the image
     try {
       await FS.rmdir(imageDirectory);
       console.log("Removed empty directory:", imageDirectory);
     } catch (dirError) {
       console.log("Directory not removed:", dirError);
     }
   } else {
     console.log("Directory is not empty. Files remaining:", filesInDirectory);
   }


    // Remove the product data from the database
    await Products.findByIdAndDelete(productID);

    console.log("Removed from database and file system");
    res.status(200).json({ message: "product removed successfully" });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = removeProduct;