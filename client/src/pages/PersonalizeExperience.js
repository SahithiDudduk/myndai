import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalizeExperience.css';

function PersonalizeExperience() {
  const navigate = useNavigate();

  const handleSectionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="personalize-experience">
      <h1>Personalize Your Experience</h1>
      <button onClick={() => handleSectionClick('/gender')} className="section-button">Getting to Know You</button>
      <button onClick={() => handleSectionClick('/dietary')} className="section-button">Dietary Preferences</button>
      <button onClick={() => handleSectionClick('/medical')} className="section-button">Medical Conditions</button>
      <button onClick={() => handleSectionClick('/goals')} className="section-button">Goals</button>
    </div>
  );
}

export default PersonalizeExperience;
