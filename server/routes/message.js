const express = require("express");
const router = express.Router();

const allMessage = require("../controllers/message/allMessage");
const addMessage = require("../controllers/message/addMessage");
const singleMessage = require("../controllers/message/singleMessage");

router.get("/", allMessage);
router.get("/:id", singleMessage);
router.post("/add", addMessage);






module.exports = router;
