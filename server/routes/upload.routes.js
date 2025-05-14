// routes/upload.routes.js
const express  = require('express');
const multer   = require('multer');
const path     = require('path');
const uploadController = require('../controllers/upload.controller');

const router = express.Router();

// Configure Multer storage (points to the same 'uploads/' you created in server.js)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// POST /upload → handles up to 10 files under field name 'files'
router.post('/multiple-upload', upload.array('files', 10), uploadController.uploadFiles);

module.exports = router;
