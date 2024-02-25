const Batch = require("../../models/Batch");

const updateBatch = async (req, res) => {
  const batchData = req.body;
  const batchId = req.params.id;
  console.log("updating Batch", batchData)

  const batch = await Batch.findByIdAndUpdate(batchId, batchData);
  if (!batch) {
    res.status(404).json({ error: "Batch not Updated" });
  } else {
    res.status(200).json({ message: "Batch Updated" });
  }
};

module.exports = updateBatch;
