// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const connectDB = require('./config/db.config');
const userRoutes = require('./routes/users.routes');
const uploadRoutes = require('./routes/upload.routes');
const serviceRoutes = require('./routes/service.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware & setup ---
app.use(cors());
app.use(express.json());

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
// Serve uploads statically (optional)
app.use('/uploads', express.static(uploadDir));

// --- Routes ---
app.use('/user', userRoutes);
app.use('/upload', uploadRoutes);
app.use('/service', serviceRoutes);
app.use('/static', express.static(path.join(__dirname, 'uploads')));


app.get('/', (req, res) => {
  res.status(200).send('API is working!');
});



// --- Start & DB connect ---
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to DB:', err);
    process.exit(1);
  });
