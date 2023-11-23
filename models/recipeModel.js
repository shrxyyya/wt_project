const mongoose=require("mongoose")

// Define the schema for the recipe 
const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true
  },
  recipeDescription: {
    type: String,
    required: true
  }
});

// Create a Mongoose model based on the schema
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
