const express = require('express');
const router = express.Router();
// const uploadVendor = require('../controllers/storage/vendortorage');
const allvendor = require('../controllers/vendors/allVendors');
const addVendor = require('../controllers/vendors/addVendor');
const updateVendor = require('../controllers/vendors/updateVendor');
const removeVendor = require('../controllers/vendors/removeVendor');
const singleVendor = require('../controllers/vendors/singleVendor');

// Get Requests
router.get("/", allvendor);
router.get("/:id", singleVendor);
// Post Requests
router.post("/add", addVendor);
router.post("/update",  updateVendor);
router.post("/remove", removeVendor);
module.exports = router