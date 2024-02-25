const Products = require("../../models/products")

const specialProduct = async(req , res) =>{

    // console.log(req.params);
    const status = req.params.status;
    const userID = req.params.id;
  
        if (!userID || userID === undefined || userID === null) {
          res.json({ error: "User not found" });
        } else {
          Products.find({status: status , assignedTo: userID})
            .then((result) => {
                // console.log(result);
              if (!result) {
                res.json({ error: "Special not found" });
              } else {
                res.json(result);
              }
            })
            .catch((err) => {
              console.log(err);
              res.json({ error: "Internal server error" });
            });
        }
}

module.exports = specialProduct