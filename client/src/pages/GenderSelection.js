import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GenderSelection.css';

function GenderSelection() {
  const navigate = useNavigate();

  const handleGenderSelect = (gender) => {
    console.log(`Selected gender: ${gender}`);
    // Navigate to AgeSelection after selecting gender
    navigate('/age');
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
