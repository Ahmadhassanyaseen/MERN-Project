const Products = require("../../models/products");

const singleProduct = (req, res) => {
  const id = req.params.id;
  // console.log(req.params);
  Products.findById(id)
    .then((result) => {
      res.json(result);
     
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = singleProduct;
