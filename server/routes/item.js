const express = require("express");

const router = express.Router();


const addItem = require("../controllers/items/add");
const allItem = require("../controllers/items/all");
const deleteItem = require("../controllers/items/delete");
const updateItem = require("../controllers/items/update");

const itemStorage = require("../controllers/storage/itemStorage");
router.get('/' , allItem);

router.post("/add", itemStorage.single("file"), addItem);
router.post("/delete/:id", deleteItem);
router.post("/update/:id", itemStorage.single("file"), updateItem);

module.exports = router;
