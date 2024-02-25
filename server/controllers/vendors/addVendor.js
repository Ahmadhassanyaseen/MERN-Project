const Vendor = require("../../models/vendors");

const addVendor = async (req, res) => {
    const vendorData = req.body;
    console.log(vendorData);
    if (vendorData === undefined || vendorData === null || vendorData === "" ) {
        res.json({ error: "Vendor Data not found" });
    }
    else{

        const newVendor = new Vendor(vendorData);
        newVendor
        .save()
        .then((result) => {
            console.log(result);
            console.log("Vendor Added");
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
    }
};
module.exports = addVendor