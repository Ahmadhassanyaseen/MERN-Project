const express = require('express')
const router = express.Router()
const upload = require('../controllers/storage/userStorage');
const AllUsers  = require('../controllers/users/allUsers');
const singleUser = require('../controllers/users/singleUser');
const addUser = require('../controllers/users/addUser');
const removeUser = require('../controllers/users/removeUser');
const checkUser = require('../controllers/users/checkUser');
const updateUser = require('../controllers/users/updateUser');
// Get Request
router.post("/userCheck", checkUser);
router.get("/", AllUsers);
router.get("/:id", singleUser);
// Post Request
router.post("/adduser", upload.single("myFile"), addUser);
router.post("/removeUser", removeUser);
router.post("/updateUser", upload.single("image"), updateUser);
module.exports = router