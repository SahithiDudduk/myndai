import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeightSelection.css';

function HeightSelection({ setCompletedSteps }) {
  const navigate = useNavigate();
  const [bmi, setBmi] = useState(null);
  const [selectedHeight, setSelectedHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  useEffect(() => {
    // Retrieve weight from local storage
    const storedWeight = localStorage.getItem('selectedWeight');
    if (storedWeight) {
      setWeight(Number(storedWeight)); // Convert to number
    }
  }, []);

  const handleHeightSelect = (heightRange) => {
    let heightValue;
    if (heightRange === '150-159 cm') heightValue = 155;
    else if (heightRange === '160-169 cm') heightValue = 165;
    else if (heightRange === '170-179 cm') heightValue = 175;
    else if (heightRange === '180+ cm') heightValue = 180;

    if (weight) {
      const calculatedBmi = (weight / ((heightValue / 100) ** 2)).toFixed(2);
      setBmi(calculatedBmi);
    }
    
    setSelectedHeight(heightRange);
    setCompletedSteps((prev) => {
      const updatedSteps = [...prev];
      updatedSteps[3] = true; // Mark height step as completed
      return updatedSteps;
    });
  };

  return (
    <div className="height-selection-container">
      <h1 className="height-title">What is your height?</h1>

      <div className="height-buttons">
        {['150-159 cm', '160-169 cm', '170-179 cm', '180+ cm'].map((range) => (
          <button
            key={range}
            className={`height-button ${selectedHeight === range ? 'selected' : ''}`}
            onClick={() => handleHeightSelect(range)}
          >
            {range}
          </button>
        ))}
      </div>

      {bmi && (
        <div className="bmi-result">
          <p>Your BMI is: {bmi}</p>
          <button className="back-button" onClick={() => navigate('/personalize')}>
            Back to Personalize
          </button>
        </div>
      )}
    </div>
  );
}

export default HeightSelection;
