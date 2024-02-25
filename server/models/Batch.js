const mongoose = require("mongoose");


const batchSchema = mongoose.Schema({
    name: String,
    createdBy:String,
    type: String,
    status:String,
    description:String,
    items: Array,
},{
      timestamps: true 
});


const Batch = mongoose.model("Batch", batchSchema);

module.exports = Batch