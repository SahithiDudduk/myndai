import React from 'react';
import './GenderSelection.css';

function GenderSelection() {
  return (
    <div className="gender-selection-container">
      <h1>Select Your Gender</h1>
      <div className="option">Male</div>
      <div className="option">Female</div>
      <div className="option">Prefer not to say</div>
    </div>
  );
}

export default GenderSelection;
