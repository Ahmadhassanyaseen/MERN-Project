const Role = require("../../models/role");

const allRole = async (req, res) => {
  const role = Role.find()
    .then((result) => {
      //   console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = allRole;
