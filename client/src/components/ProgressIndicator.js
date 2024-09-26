import React from 'react';
import './ProgressIndicator.css';

const ProgressIndicator = ({ completedSteps }) => {
  const totalSteps = 4; // Adjust this if you have more steps

  return (
    <div className="progress-indicator">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div key={index} className={`circle ${completedSteps[index] ? 'filled' : ''}`}>
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
