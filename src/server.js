const express = require('express');
const multer = require('multer');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// Connect to MongoDB (make sure MongoDB is running)
const url = 'mongodb://localhost:27017';
const dbName = 'Recipes';
let db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  db = client.db(dbName);
});

// Set up multer for handling file uploads
const upload = multer();

// Handle POST requests to submit a recipe
app.post('/submitRecipe', upload.single('imageFile'), async (req, res) => {
  try {
    // Create a new recipe document
    const recipe = {
      recipeName: req.body.recipeName,
      recipeDescription: req.body.recipeDescription,
      imageData: req.file.buffer,
    };

    // Insert the recipe document into the 'recipes' collection
    const result = await db.collection('recipes').insertOne(recipe);

    console.log('Recipe submitted:', recipe);
    res.status(201).send('Recipe submitted successfully');
  } catch (error) {
    console.error('Error submitting recipe:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
