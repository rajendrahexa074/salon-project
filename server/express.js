const express = require('express');
const connectDB = require('./config/db.config');
const userRoutes = require('./routes/users.routes');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/', userRoutes);
connectDB();
app.get('/', (req, res) => {
  res.status(200).send('Api is working!');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
