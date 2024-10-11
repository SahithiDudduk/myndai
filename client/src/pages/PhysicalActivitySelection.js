import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PhysicalActivitySelection.css';

const PhysicalActivity = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Retrieve medical condition from the previous page
  const medicalCondition = location.state?.medicalCondition;

  const [selectedActivity, setSelectedActivity] = useState('');
  const [error, setError] = useState('');

  const handleSelectActivity = (activity) => {
    setSelectedActivity(activity);
    setError(''); // Clear error when an activity is selected
  };

  const handleProceed = () => {
    if (!selectedActivity) {
      setError('Please select a physical activity level before proceeding.');
      return;
    }
    // Navigate to the next page with selected activity and medical condition
    navigate('/personalize', { state: { medicalCondition, physicalActivity: selectedActivity } });
  };

  return (
    <div className="physical-activity-container">
      <h1>Physical Activity</h1>
      <p>Medical Condition: {medicalCondition}</p> {/* Display selected medical condition */}
      
      <div className="button-group">
        <button
          className={selectedActivity === 'Enough Exercise' ? 'selected' : ''}
          onClick={() => handleSelectActivity('Enough Exercise')}
        >
          I think I have enough exercise
        </button>

        <button
          className={selectedActivity === 'Moderate Activity' ? 'selected' : ''}
          onClick={() => handleSelectActivity('Moderate Activity')}
        >
          I'm moderately active
        </button>

        <button
          className={selectedActivity === 'Not Enough Exercise' ? 'selected' : ''}
          onClick={() => handleSelectActivity('Not Enough Exercise')}
        >
          I don't have enough exercise
        </button>
      </div>

      {error && <p className="error-message">{error}</p>} {/* Display validation error */}

      <button className="proceed-button" onClick={handleProceed}>
        Proceed
      </button>
    </div>
  );
};

export default PhysicalActivity;
