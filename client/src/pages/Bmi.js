// src/pages/BmiResult.js

import React from 'react';

const BmiResult = ({ bmi }) => {
    return (
        <div>
            <h2>Your BMI Result</h2>
            <p>Your BMI is: {bmi.toFixed(2)}</p>
            {/* Optionally, you can add more info about the BMI categories */}
        </div>
    );
};

export default BmiResult;
