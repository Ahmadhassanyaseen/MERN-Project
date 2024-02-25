const Users = require("../../models/users");

const AllUsers = (req, res) => {
  const dbUsers = Users.find()
    .then((result) => {
      res.json(result);
     
    })
    .catch((err) => {
      console.log(err);
    });
    
// res.send("All Users");
};

module.exports = AllUsers;