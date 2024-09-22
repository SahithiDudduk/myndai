import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeightSelection.css'; // Import your styles

function HeightSelection() {
  const navigate = useNavigate();
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const handleHeightSelect = (heightRange) => {
    // Here you could parse the height range for calculation
    let heightValue;
    if (heightRange === '150-159 cm') heightValue = 155;
    else if (heightRange === '160-169 cm') heightValue = 165;
    else if (heightRange === '170-179 cm') heightValue = 175;
    else if (heightRange === '180+ cm') heightValue = 180;

    // Calculate BMI
    const calculatedBmi = (weight / ((heightValue / 100) ** 2)).toFixed(2);
    setBmi(calculatedBmi);
  };

  const handleWeightSelect = (selectedWeight) => {
    setWeight(selectedWeight);
    navigate('/height');
  };

  return (
    <div className="height-selection-container">
      <h1 className="height-title">What is your height?</h1>

      <div className="height-buttons">
        <button className="height-button" onClick={() => handleHeightSelect('150-159 cm')}>
          150-159 cm
        </button>
        <button className="height-button" onClick={() => handleHeightSelect('160-169 cm')}>
          160-169 cm
        </button>
        <button className="height-button" onClick={() => handleHeightSelect('170-179 cm')}>
          170-179 cm
        </button>
        <button className="height-button" onClick={() => handleHeightSelect('180+ cm')}>
          180+ cm
        </button>
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
