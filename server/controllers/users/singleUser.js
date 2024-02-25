const Users = require("../../models/users");

const singleUser = (req, res) => {

const id = req.params.id;
// console.log(id);
if (!id || id === undefined || id === null) {
  res.json({ error: "User not found" });
} else {
  Users.findById(id)
    .then((result) => {
      if (!result) {
        res.json({ error: "User not found" });
      } else {
        res.json(result);
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: "Internal server error" });
    });
}

  };

  module.exports = singleUser