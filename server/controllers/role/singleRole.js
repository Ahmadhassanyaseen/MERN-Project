const Role = require("../../models/role");
const singleRole = async (req, res) => {
  const id = req.params.id;
  // console.log('====================================');
  // console.log(id);
  // console.log('====================================');
  if (!id || id === undefined || id === null) {
  res.json({ error: "User not found" });
} else {
  const dbUsers =id && Role.find({ _id: id })
    .then((result) => {
      // console.log("Single role");
      res.json(result);
    })
    .catch((err) => {
      console.log("SingleRole Error");
      console.log('====================================');
      console.log(err.message);
      console.log('====================================');
    });
  }
};
module.exports = singleRole;
