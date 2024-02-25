const Batch = require("../../models/Batch");

const updateBatch = async (req, res) => {
  const batchData = req.body;
  const batchId = req.params.id;
  console.log(batchId)
  try {
    const batch = await Batch.findByIdAndDelete(batchId);

    if (!batch) {
      res.status(404).json({ error: "Batch not found" });
    } else {
      res.status(200).json({ message: "Batch Deleted" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = updateBatch;
