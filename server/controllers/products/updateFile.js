
const uploadMultiple = require("../storage/productStorage");



const updateFile = async(req, res) => {

console.log(req.body , req.files);
res.json(req.file);
// const destPath = req.query.imagePath;
//   if (!fs.existsSync(destPath)) {
//     fs.mkdirSync(destPath, { recursive: true });
//   }

//   // Set the destination path in the request object for multer
//   req.destPath = destPath;

//   uploadMultiple.array("files[]")(req, res, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send("Error uploading files");
//     }
//     let fileNames = [];
//     const files = req.files;
//     files.forEach((file) => {
//       console.log(file.filename);

//       fileNames.push(file.filename);
//     });

//     // res.render("index.ejs", { title: "Files Uploaded" });
//     res.json({ fileNames, destFolder });
//   });
};

module.exports = updateFile;
