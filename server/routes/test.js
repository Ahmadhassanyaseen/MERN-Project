const express = require("express");
const router = express.Router();

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
router.post("/multiple", (req, res) => {
  // Create a folder where all the files will be uploaded
  const destFolder = Date.now().toString();
  const destPath = path.join(__dirname, "../public/products",  destFolder);
  console.log(destPath);

  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }

  // Set the destination path in the request object for multer
  req.destPath = destPath;

  uploadMultiple.array("files[]")(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error uploading files");
    }
    let fileNames = []
    const files = req.files;
    files.forEach((file) => {
      console.log(file.filename);

      fileNames.push(file.filename);
    });

    // res.render("index.ejs", { title: "Files Uploaded" });
    res.json({ fileNames , destFolder});
  });
});

module.exports = router;