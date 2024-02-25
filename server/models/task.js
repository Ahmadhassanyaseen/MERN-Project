const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    name: String,
    status: String,
    description: String,
    assignedTo: String,
    creator:String,
    priority: String,
    creator: String,

} , {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;