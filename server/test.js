const Products = require("../../models/products");
const path = require("path");
const fs = require("fs"); // Import fs.promises for async file operations

const uploadMultiple = require("../storage/productStorage");

const addProduct = async (req, res) => {
  console.log("xeno");
  try {
    const productData = req.body;
    const imageName = req.file;

    console.log("Image Name:", imageName);
    console.log("Product Data:", productData);

    const newProduct = new Products(productData);

    const destFolder = Date.now().toString();
    const destPath = path.join(__dirname, "public", destFolder);

    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }

    // Set the destination path in the request object for multer
    req.destPath = destPath;

    uploadMultiple.array("myFile")(req, res, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error uploading files");
      }

      const files = req.files;
      files &&
        files.forEach((file) => {
          console.log("Uploaded File:", file);
        });
      // Store the image path in the database
      const imageData = path.join(imageName);
      newProduct.image = imageData;
      const imagePath = destPath.toString();
      newProduct.imagePath = imagePath;

      // Save the product to the database
      const savedProduct = newProduct.save();

      console.log("Product saved:", savedProduct);
      res.status(201).json(savedProduct);
    });

    // Retrieve the stored folderName from the request object
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = addProduct;
