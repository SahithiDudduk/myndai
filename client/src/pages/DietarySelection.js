import React from 'react';
import './DietarySelection.css'; // Import your styles

function DietarySelection() {
  const handlePreferenceSelect = (preference) => {
    console.log(`Selected preference: ${preference}`);
    // Add your logic for handling preference selection here
  };

  return (
    <div className="dietary-selection-container">
      <h1 className="dietary-title">Dietary Preferences</h1>

      <div className="dietary-buttons">
        <button className="dietary-button" onClick={() => handlePreferenceSelect('Vegetarian')}>
          Vegetarian
        </button>
        <button className="dietary-button" onClick={() => handlePreferenceSelect('Gluten Free')}>
          Gluten Free
        </button>
        <button className="dietary-button" onClick={() => handlePreferenceSelect('Dairy Free')}>
          Dairy Free
        </button>
        <button className="dietary-button" onClick={() => handlePreferenceSelect('Keto')}>
          Keto
        </button>
        <button className="dietary-button" onClick={() => handlePreferenceSelect('Other')}>
          Other
        </button>
      </div>
    </div>
  );
}

export default DietarySelection;
