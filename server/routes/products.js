const express = require('express');
const router = express.Router();
const uploadProduct = require("../controllers/storage/productStorage");
const allProducts = require('../controllers/products/allProducts');
const addProduct = require('../controllers/products/addProduct');
const updateProduct = require('../controllers/products/updateProduct');
const removeProduct = require('../controllers/products/removeProduct');
const specialProduct = require('../controllers/products/specialProduct');
const singleProduct = require('../controllers/products/singleProduct');
const addTest = require('../controllers/products/test');
const updateFile = require('../controllers/products/updateFile');
// Get Requests
router.get("/", allProducts);
router.get("/:id" , singleProduct)
router.get("/:status/:id" , specialProduct)

// Post Requests
router.post("/add",uploadProduct.single("myFile"), addProduct);
router.post("/addTest", addTest);
router.post("/update",  updateProduct);
router.post("/remove", removeProduct);
router.post("/api/updateFile" , updateFile)
module.exports = router;