const Vendor = require("../../models/vendors");

const removeVendor = async (req, res) => {
    const id = req.body.vendorID
    if (id) {
        Vendor.findByIdAndDelete(id)
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

module.exports = removeVendor