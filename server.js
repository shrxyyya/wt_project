const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Recipe = require('./models/recipeModel'); // Import Recipe model

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const routes = require('./Routes/recipeRoutes');
app.use('/', routes); // Adjust the path if needed

const MONGODB_URI = process.env.MONGODB_URI|| "mongodb://127.0.0.1:27017/";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
  });



  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });