const Products = require("../../models/products");

const allProducts = async (req, res) => {
  const dbUsers = Products.find()
    .then((result) => {
      
      res.json(result);
      // console.log("All Product");
    })
    .catch((err) => {
      console.log(err);
    });
  
  
};

module.exports = allProducts;