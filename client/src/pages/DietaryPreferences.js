import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DietaryPreferences.css';

function DietaryPreferences({ setCompletedSteps }) {
  const navigate = useNavigate();

  const handleDietarySelect = (dietary) => {
    console.log(`Selected dietary preference: ${dietary}`);
    // Mark dietary preferences step as completed
    setCompletedSteps((prev) => {
      const updatedSteps = [...prev];
      updatedSteps[0] = true; // Mark dietary preferences step as completed
      return updatedSteps;
    });
    // Navigate to Food Choices
    setTimeout(() => {
      navigate('/foodChoices'); // Update the path as necessary
    }, 500);
  };

  return (
    <div className="dietary-preferences-container">
      <h1>Dietary Preferences</h1>
      <div className="option" onClick={() => handleDietarySelect('Vegetarian')}>Vegetarian</div>
      <div className="option" onClick={() => handleDietarySelect('Gluten-free')}>Gluten-free</div>
      <div className="option" onClick={() => handleDietarySelect('Dairy-free')}>Dairy-free</div>
      <div className="option" onClick={() => handleDietarySelect('Keto')}>Keto</div>
    </div>
  );
}

export default DietaryPreferences;
