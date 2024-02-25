const Products = require("../../models/products");
const path = require("path");


const addProduct = async (req, res, next) => {
  const productData = req.body;
  const imageName = req.body.image;

  console.log("image "+imageName);
  console.log(productData);

  const newProduct = new Products(productData);

  // Retrieve the stored folderName from the request object
  // const folderName = req.folderName;

  // // Store the image path in the database
  // const imageData = path.join(imageName);
  // newProduct.image = imageData;
  // const imagePath = path.join(folderName);
  // newProduct.imagePath = imagePath;

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
    console.log("product saved");
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = addProduct;
