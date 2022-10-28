// upload files
const router = require("express").Router();
var multer = require("multer");

var imagename;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    var filname = Date.now() + "-" + file.originalname.toLowerCase();
    imagename = filname;
    cb(null, filname);
  },
});

const upload = multer({ storage: storage });
router.post("/", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json(imagename);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
