// upload files
const router = require("express").Router();

var multer = require("multer");
var filname;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    filname = Date.now() + "-" + req.body.name.toLowerCase();
    cb(null, filname);
  },
});
const upload = multer({ storage: storage });
var uploadMultiple = upload.single("file");

router.post("/", uploadMultiple, (req, res) => {
  try {
    res.status(200).json(filname);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
