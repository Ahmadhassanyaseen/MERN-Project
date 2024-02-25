const Batch = require("../../models/Batch");

const allBatch = async (req, res) => {
  try {
    const batchID = req.query.id;

    let batchData;

    if (batchID) {
      batchData = await Batch.findById(batchID);

      if (!batchData) {
        return res.status(404).json({ error: "Batch not found" });
      }
    } else {
      batchData = await Batch.find({});
    }

    if (!batchData || (Array.isArray(batchData) && batchData.length === 0)) {
      return res.status(404).json({ error: "Batch not found" });
    }

    res.json(batchData);
  } catch (error) {
    console.error("Error fetching batch data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = allBatch;
