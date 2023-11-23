const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipeModel'); // Adjust the path if needed

router.post('/api/ownRecipe', async (req, res) => {
  const { recipeName, recipeDescription} = req.body;

  try {
    // Validate incoming data
    if (!recipeName || !recipeDescription ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if recipe already exists
    const existingRecipe = await Recipe.findOne({ recipeName });
    if (existingRecipe) {
      return res.status(400).json({ error: 'Recipe already exists' });
    }

    // Create a new Recipe instance
    const newRecipe = new Recipe({
      recipeName,
      recipeDescription
      
    });

    // Save the new recipe
    await newRecipe.save();

    return res.status(201).json({ message: 'Recipe added successfully', recipe: newRecipe });
  } catch (error) {
    console.error('Error submitting recipe:', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;