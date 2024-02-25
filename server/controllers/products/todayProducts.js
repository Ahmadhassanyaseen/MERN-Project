const Products = require("../../models/products");

const todayProducts = async (req, res) => {
  // const today = new Date().toLocaleDateString();
  // console.log(today);
  try {
    
    const result = await Products.find();
    res.json(result);
  }
  catch (error) {
    console.log(error);
  }
}
module.exports = todayProducts