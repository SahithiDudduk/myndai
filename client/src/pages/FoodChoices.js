import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodChoices.css';

function FoodChoices({ setCompletedSteps }) {
  const navigate = useNavigate();

  const handleFoodSelect = (food) => {
    console.log(`Selected food choice: ${food}`);
    // Mark food choices step as completed
    setCompletedSteps((prev) => {
      const updatedSteps = [...prev];
      updatedSteps[1] = true; // Mark food choices step as completed
      return updatedSteps;
    });
    // Navigate to Meal Frequency
    setTimeout(() => {
      navigate('/mealFrequency'); // Update the path as necessary
    }, 500);
  };

  return (
    <div className="food-choices-container">
      <h1>Food Choices</h1>
      <div className="food-option" onClick={() => handleFoodSelect('Fruits')}>Fruits</div>
      <div className="food-option" onClick={() => handleFoodSelect('Vegetables')}>Vegetables</div>
      <div className="food-option" onClick={() => handleFoodSelect('Whole Grains')}>Whole Grains</div>
      <div className="food-option" onClick={() => handleFoodSelect('Lean Protein')}>Lean Protein</div>
    </div>
  );
}

export default FoodChoices;
