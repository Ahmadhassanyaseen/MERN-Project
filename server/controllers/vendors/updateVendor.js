const Vendor = require("../../models/vendors");

const updateVendor = async (req, res) => {
    const id = req.body.vendorID;
    if (id) {
        Vendor.findByIdAndUpdate(id, req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        res.json({ error: "Vendor not found" });
    }
};

module.exports = updateVendor