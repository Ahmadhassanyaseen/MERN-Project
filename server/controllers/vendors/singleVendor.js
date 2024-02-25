const Vendors = require("../../models/vendors");

const singleVendor = (req, res) => {
  const id = req.params.id;
  // console.log(id);
  if (!id || id === undefined || id === null) {
    res.json({ error: "vendor not found" });
  } else {
    Vendors.findById(id)
      .then((result) => {
        if (!result) {
          res.json({ error: "vendor not found" });
        } else {
          res.json(result);
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({ error: "Internal server error" });
      });
  }
};

module.exports = singleVendor;
