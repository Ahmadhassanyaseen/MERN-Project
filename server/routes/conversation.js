const express = require("express");
const router = express.Router();

const allConversation = require("../controllers/conversation/allConversations");
const addConversation = require("../controllers/conversation/addConversation");
const singleConversation = require("../controllers/conversation/singleConversation");

router.get("/" , allConversation )
router.post("/add" , addConversation);
router.get("/:id" , singleConversation)







module.exports = router;