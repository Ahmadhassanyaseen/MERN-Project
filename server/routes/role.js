const express = require("express");
const router = express.Router();
// const uploadrole = require('../controllers/storage/roletorage');
const allRole = require("../controllers/role/allRole");
const addRole = require("../controllers/role/addRole");
const updateRole = require("../controllers/role/updateRole");
const removeRole = require("../controllers/role/removeRole");
const singleRole = require("../controllers/role/singleRole");

// Get Requests
router.get("/", allRole);
router.get("/:id", singleRole);
// Post Requests
router.post("/add", addRole);
router.post("/update", updateRole);
router.post("/remove", removeRole);
module.exports = router;
