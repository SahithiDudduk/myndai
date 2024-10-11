import React, { useState } from 'react';
import './MedicalConditions.css';
import { useNavigate } from 'react-router-dom';

const MedicalConditions = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState('');

  const handleSelectCondition = (condition) => {
    setSelectedCondition(condition);

    // Navigate to the Physical Activity page once a condition is selected
    navigate('/physicalActivitySelection', { state: { medicalCondition: condition } });
  };

  return (
    <div className="medical-conditions-container">
      <h1>Medical Conditions</h1>
      
      <div className="button-group">
        <button
          className={selectedCondition === 'Diabetes' ? 'selected' : ''}
          onClick={() => handleSelectCondition('Diabetes')}
        >
          Diabetes
        </button>

        <button
          className={selectedCondition === 'Hypertension' ? 'selected' : ''}
          onClick={() => handleSelectCondition('Hypertension')}
        >
          Hypertension
        </button>

        <button
          className={selectedCondition === 'High Cholesterol' ? 'selected' : ''}
          onClick={() => handleSelectCondition('High Cholesterol')}
        >
          High Cholesterol
        </button>

        <button
          className={selectedCondition === 'Allergies' ? 'selected' : ''}
          onClick={() => handleSelectCondition('Allergies')}
        >
          Allergies
        </button>

        <button
          className={selectedCondition === 'Other' ? 'selected' : ''}
          onClick={() => handleSelectCondition('Other')}
        >
          Other (Specify)
        </button>
      </div>
    </div>
  );
};

export default MedicalConditions;
