import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AgeSelection.css';
import ProgressIndicator from '../components/ProgressIndicator';

function AgeSelection({ completedSteps, setCompletedSteps }) {
  const navigate = useNavigate();

  const handleAgeSelect = (ageRange) => {
    console.log(`Selected age range: ${ageRange}`);
    // Mark age step as completed
    setCompletedSteps((prev) => {
      const updatedSteps = [...prev];
      updatedSteps[1] = true; // Age step completed
      return updatedSteps;
    });
    // Navigate to WeightSelection
    setTimeout(() => {
      navigate('/weight');
    }, 500);
  };

  return (
    <div className="age-selection-container">
      <h1 className="age-title">Age</h1>
      <div className="age-buttons">
        <button className="age-button" onClick={() => handleAgeSelect('18-29')}>18-29</button>
        <button className="age-button" onClick={() => handleAgeSelect('30-39')}>30-39</button>
        <button className="age-button" onClick={() => handleAgeSelect('40-49')}>40-49</button>
        <button className="age-button" onClick={() => handleAgeSelect('50+')}>50+</button>
      </div>
    </div>
  );
}

export default AgeSelection;
