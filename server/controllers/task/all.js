const Task = require("../../models/task");

const allTask = async(req,res)=>{
    const id = req.query.id;
    if(id){
        const task = await Task.findById(id);
        if(!task){
            res.json({error:"Task not found"});
        }
        res.json(task);
    }
    else{
        const tasks = await Task.find({});
        res.json(tasks);
    }
}

module.exports = allTask;