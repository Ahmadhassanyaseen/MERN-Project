const Vendor = require("../../models/vendors");

const allvendor = async (req, res) => {
  const vendor = Vendor
    .find()
    .then((result) => {
    //   console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = allvendor;