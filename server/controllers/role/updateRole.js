const Role = require("../../models/role");

const updateRole = async (req, res) => {
  const id = req.body.roleID;
  console.log("update Role", req.body);
  if (id) {
    Role.findByIdAndUpdate(id, req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.json({ error: "role not found" });
  }
};

module.exports = updateRole;
