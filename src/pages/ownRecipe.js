import React, { useState } from 'react';
import Navbar from '../components/navbar'; // Update path if needed
import '../styles/ownRecipe.css';
import Footer from '../components/footer';

const OwnRecipe = () => {
  const [recipeData, setRecipeData] = useState({
    recipeName: '',
    recipeDescription: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/api/ownRecipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Update the content type if needed
        },
        body: JSON.stringify({
          recipeName: recipeData.recipeName,
          recipeDescription: recipeData.recipeDescription,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit recipe');
      }
  
      console.log('Recipe submitted successfully');
      alert('Recipe submitted successfully');
  
      setRecipeData({
        recipeName: '',
        recipeDescription: '',
      });
    } catch (error) {
      console.error('Error submitting recipe:', error);
      alert('Failed to submit recipe');
    }
  };

  return (
    <div className='form-container' style={{backgroundColor:'rgb(244, 224, 235)'}}>
      <Navbar />
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
        <button type="submit">Submit Recipe</button>
      </form>
      
    </div>
    
  );
};

export default OwnRecipe;
