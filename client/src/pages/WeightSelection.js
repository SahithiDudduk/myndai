import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WeightSelection.css';

function WeightSelection({ setCompletedSteps }) {
  const navigate = useNavigate();
  const [selectedWeight, setSelectedWeight] = useState(null);

  const handleWeightSelect = (weight) => {
    localStorage.setItem('selectedWeight', weight);
    setSelectedWeight(weight);
    setCompletedSteps((prev) => {
      const updatedSteps = [...prev];
      updatedSteps[2] = true; // Mark weight step as completed
      return updatedSteps;
    });
    navigate('/height');
  };

  return (
    <div className="weight-selection-container">
      <h1 className="weight-title">Select Your Weight</h1>
      <div className="weight-buttons">
        {[50, 60, 70, 80].map((weight) => (
          <button
            key={weight}
            className={`weight-button ${selectedWeight === weight ? 'selected' : ''}`}
            onClick={() => handleWeightSelect(weight)}
          >
            {weight} kg
          </button>
        ))}
      </div>
    </div>
  );
}

export default WeightSelection;
