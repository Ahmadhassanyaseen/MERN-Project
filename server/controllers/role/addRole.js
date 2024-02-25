const Role = require("../../models/role");

const addRole = async (req, res) => {
  const roleData = req.body;
  console.log(roleData);
  if (roleData === undefined || roleData === null || roleData === "") {
    res.json({ error: "role Data not found" });
  } else {
    const newRole = new Role(roleData);
    newRole
      .save()
      .then((result) => {
        console.log(result);
        console.log("role Added");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
module.exports = addRole;
