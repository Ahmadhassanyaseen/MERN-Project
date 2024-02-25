const Task = require("../../models/task");

const addTask = async(req,res)=>{
    

    const taskData = req.body;
    console.log(taskData);
    const newTask = new Task({
        name: taskData.name,
        description: taskData.description,
        status: taskData.status,
        creator: taskData.creator,
        assignedTo: taskData.assignedTo,
        priority: taskData.priority,


    });
    await newTask.save();
    res.json(newTask);  
}

module.exports = addTask