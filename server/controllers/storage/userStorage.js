const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = Date.now().toString();
    req.folderName = folderName; // Store folderName in the request object
    const destPath = path.join("public", "users", folderName);
    fs.mkdir(destPath, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Directory created successfully");
        cb(null, destPath);
      }
    });
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const originalFileName = file.originalname;
    cb(null, originalFileName);
  },
});
var upload = multer({ storage: storage });

module.exports = upload