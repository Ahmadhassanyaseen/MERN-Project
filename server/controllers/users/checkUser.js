const Users = require("../../models/users");
const checkUser = (req, res) => {
  const userData = req.body;
  console.log(userData);

  Users.findOne({
    email: userData.email,
    password: userData.password,
  })
    .then((foundUser) => {
      if (foundUser) {
        console.log("User Found");
        console.log(foundUser._id.toString());
        res.status(200).json({
          status: "success",
          id: foundUser, // Assuming the ID field in your database is named '_id'
          message: "User found",
        });
      } else {
        console.log("User Not Found");
        res.status(404).json({
          status: "error",
          message: "User not found",
        });
      }
    })
    .catch((err) => {
      console.log("Error:", err);
      res.status(500).json({
        status: "error",
        message: "An error occurred",
      });
    });
};

module.exports = checkUser;