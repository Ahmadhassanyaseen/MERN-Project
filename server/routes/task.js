const router = require("express").Router();

const addTask = require("../controllers/task/add");
const allTasks = require("../controllers/task/all");
const deleteTask = require("../controllers/task/delete");
const updateTask = require("../controllers/task/update");


router.get("/", allTasks);
router.post("/add", addTask);
router.post("/delete/:id", deleteTask);
router.post("/update/:id", updateTask);

module.exports = router;
