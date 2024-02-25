const Role = require("../../models/role");

const removeRole = async (req, res) => {
 console.log("Removing role")
 console.log(req.body);
  const id = req.body.roleID;
  if (id) {
    Role.findByIdAndDelete(id)
      .then((result) => {
        console.log("Role Removed");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.json({ error: "role not found" });
  }
};

module.exports = removeRole;
