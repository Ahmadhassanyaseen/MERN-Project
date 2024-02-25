const Task = require("../../models/task");

const updateTask = async(req,res)=>{
    const id = req.params.id;
    if(id){
        const task = await Task.findByIdAndUpdate(id,req.body);
        if(!task){
            res.json({error:"Task not found"});
        }
        res.json(task);
    }
    else{
        res.json({error:"Task not found"});
    }
}

module.exports = updateTask