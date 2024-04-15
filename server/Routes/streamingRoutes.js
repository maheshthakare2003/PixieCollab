const express = require("express");
const multer = require("multer");
const path = require('path');
const router = express.Router();
router.use(express.json());
const { uploadToCloudinary,streamFromCloudinary } = require("../Controllers/streamControllers.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/temp"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single('file'), uploadToCloudinary);
router.post("/streaming", streamFromCloudinary);

module.exports = router;
