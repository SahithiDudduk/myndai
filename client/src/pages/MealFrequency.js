import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MealFrequency.css';

function MealFrequency({ setCompletedSteps }) {
  const navigate = useNavigate();

  const handleMealSelect = (mealFrequency) => {
    console.log(`Selected meal frequency: ${mealFrequency}`);
    // Mark meal frequency step as completed
    setCompletedSteps((prev) => {
      const updatedSteps = [...prev];
      updatedSteps[2] = true; // Mark meal frequency step as completed
      return updatedSteps;
    });
    // Navigate to Personalize page
    navigate('/personalize'); // Update to your desired path
  };

  return (
    <div className="meal-frequency-container">
      <h1>Meal Frequency</h1>
      <div className="meal-option" onClick={() => handleMealSelect('3 meals a day')}>3 meals a day</div>
      <div className="meal-option" onClick={() => handleMealSelect('4-6 small meals/snacks a day')}>4-6 small meals/snacks a day</div>
      <div className="meal-option" onClick={() => handleMealSelect('Intermittent Fasting')}>Intermittent Fasting</div>
      <div className="meal-option" onClick={() => handleMealSelect('Other (Specify)')}>Other (Specify)</div>
    </div>
  );
}

export default MealFrequency;
