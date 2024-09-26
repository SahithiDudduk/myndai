import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalizeExperience.css';

function PersonalizeExperience({ setCompletedSteps }) {
  const navigate = useNavigate();

  const handleSectionClick = (path, index) => {
    setCompletedSteps((prev) => {
      const newSteps = [...prev];
      newSteps[index] = true; // Mark the corresponding step as completed
      return newSteps;
    });
    navigate(path);
  };

  return (
    <div className="personalize-experience">
      <h1>Personalize Your Experience</h1>
      <button onClick={() => handleSectionClick('/gender', 0)} className="section-button">Getting to Know You</button>
      <button onClick={() => handleSectionClick('/dietary', 1)} className="section-button">Dietary Preferences</button>
      <button onClick={() => handleSectionClick('/medical', 2)} className="section-button">Medical Conditions</button>
      <button onClick={() => handleSectionClick('/goals', 3)} className="section-button">Goals</button>
    </div>
  );
}

export default PersonalizeExperience;
