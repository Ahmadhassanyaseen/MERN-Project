const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, destPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const originalFileName = file.originalname;
    cb(null, originalFileName);
  },
});
var uploadTest = multer({ storage: storage });

module.exports = uploadTest;
