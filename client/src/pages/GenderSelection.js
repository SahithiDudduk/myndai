import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GenderSelection.css';

function GenderSelection({ setCompletedSteps }) {
  const navigate = useNavigate();

  const handleGenderSelect = (gender) => {
    console.log(`Selected gender: ${gender}`);
    // Update completed steps
    setCompletedSteps((prev) => {
      const updatedSteps = [...prev];
      updatedSteps[0] = true; // Mark gender step as completed
      return updatedSteps;
    });
    // Navigate to AgeSelection
    setTimeout(() => {
      navigate('/age');
    }, 500);
  };

  return (
    <div className="gender-selection-container">
      <h1>Select Your Gender</h1>
      <div className="option" onClick={() => handleGenderSelect('Male')}>Male</div>
      <div className="option" onClick={() => handleGenderSelect('Female')}>Female</div>
      <div className="option" onClick={() => handleGenderSelect('Prefer not to say')}>Prefer not to say</div>
    </div>
  );
}

export default GenderSelection;
