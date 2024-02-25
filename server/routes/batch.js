const express =require("express");

const router = express.Router();

const allBatch = require("../controllers/batch/all");
const addBatch = require("../controllers/batch/add");
const deleteBatch = require("../controllers/batch/delete");
const updateBatch = require("../controllers/batch/update");


router.get("/", allBatch);
router.post("/add", addBatch);
router.post("/delete/:id", deleteBatch);
router.post("/update/:id", updateBatch);

module.exports = router