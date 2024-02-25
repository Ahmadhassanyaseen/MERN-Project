const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storageMultiple = multer.diskStorage({
  destination: function (req, file, cb) {
    // The destination folder is set in the middleware, so no need to do it here.
    cb(null, req.destPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + ext);
  },
});

const uploadMultiple = multer({ storage: storageMultiple });

module.exports = uploadMultiple;