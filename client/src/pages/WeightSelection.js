import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WeightSelection.css'; // Import your styles

function WeightSelection() {
  const navigate = useNavigate();

  const handleWeightSelect = (weight) => {
    // Save the selected weight in local storage or a global state if needed
    localStorage.setItem('selectedWeight', weight);
    navigate('/height');
  };

  return (
    <div className="weight-selection-container">
      <h1 className="weight-title">Select Your Weight</h1>

      <div className="weight-buttons">
        <button className="weight-button" onClick={() => handleWeightSelect(50)}>
          50 kg
        </button>
        <button className="weight-button" onClick={() => handleWeightSelect(60)}>
          60 kg
        </button>
        <button className="weight-button" onClick={() => handleWeightSelect(70)}>
          70 kg
        </button>
        <button className="weight-button" onClick={() => handleWeightSelect(80)}>
          80 kg
        </button>
      </div>
    </div>
  );
}

export default WeightSelection;
