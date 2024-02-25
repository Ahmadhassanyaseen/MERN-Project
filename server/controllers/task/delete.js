const Task = require('../../models/task');

const deleteTask = async(req,res)=>{
    const id = req.params.id;
    if(id){
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            res.json({error:"Task not found"});
        }
        res.json(task);
    }
    else{
        res.json({error:"Task not found"});
    }
}

module.exports = deleteTask;