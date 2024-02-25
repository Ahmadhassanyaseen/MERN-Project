const Batch = require("../../models/Batch");

const addBatch = async (req, res) => {
  const batchData = req.body;
  console.log(batchData , "Batch Data");
  const newBatch = new Batch({
    name: batchData.name,
    createdBy: batchData.createdBy,
    type: batchData.type,
    status: batchData.status,
    description: batchData.description,
    items: batchData.items,
  });

  const batch = await newBatch.save();
  if(!batch) {
     res.status(404).json({error: "Batch not created"});
  }
  else{
    res.status(200).json({message: "Batch created"});
  }
  
};

module.exports = addBatch;
