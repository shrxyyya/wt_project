import React, { useState } from 'react';
import axios from 'axios'; // Don't forget to import axios
import Navbar from '../components/navbar';
import '../styles/ownRecipe.css';

function OwnRecipe() {
  // State to hold form data
  const [recipeData, setRecipeData] = useState({
    recipeName: '',
    recipeDescription: '',
    imageFile: null, // Store the selected image file
  });

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      // If the input is a file input, store the file object
      setRecipeData({
        ...recipeData,
        [name]: files[0],
      });
    } else {
      // If it's a regular input, handle it as usual
      setRecipeData({
        ...recipeData,
        [name]: value,
      });
    }
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('recipeName', recipeData.recipeName);
      formData.append('recipeDescription', recipeData.recipeDescription);
      formData.append('imageFile', recipeData.imageFile);

      // Make a POST request to the server
      await axios.post('http://localhost:3000/submitRecipe', formData);

      console.log('Recipe submitted:', recipeData);
      // You can reset the form or redirect the user here
    } catch (error) {
      console.error('Error submitting recipe:', error);
      // Handle errors, show an error message, etc.
    }
  };

  return (
    <div className='form-container'> 
      <Navbar/>
      <h2>Add Your Own Recipe</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='label'>
          Recipe Name:
          <input
            type="text"
            name="recipeName"
            value={recipeData.recipeName}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <div className='label'>
          Recipe Description:
          <textarea
            name="recipeDescription"
            value={recipeData.recipeDescription}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <div className='label'>
          Insert Image:
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
}

export default OwnRecipe;