import React from 'react';

// Styles object for the container and buttons
const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  button: {
    display: 'block',
    margin: '10px auto',
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
  }
};

// Function to fetch nutrition data from API
const fetchNutritionData = async (goal) => {
  try {
    const age = 26;
    const gender = 'Male';
    const response = await fetch(`/api/nutrition?age=${age}&gender=${gender}&goal=${goal}`);

    // Check if response is HTML (error page) instead of JSON
    const textResponse = await response.text();
    console.log('Raw response:', textResponse);

    // Convert to JSON if it's valid JSON
    const data = JSON.parse(textResponse);
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
  }
};


const GoalActivity = () => {
  // Handle the button click event and trigger fetch
  const handleGoalSelection = (goal) => {
    console.log(`Selected Goal: ${goal}`);
    fetchNutritionData(goal); // Call API with the selected goal
  };

  return (
    <div style={styles.container}>
      {/* Title */}
      <h1 style={styles.title}>What brings you to MyndAI?</h1>

      {/* Options with event handlers */}
      <button style={styles.button} onClick={() => handleGoalSelection('Loose Weight')}>Loose Weight</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Gain Strength')}>Gain Strength</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Get Flexible')}>Get Flexible</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Meditation')}>Meditation</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Sleep Well')}>Sleep Well</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Gain Weight')}>Gain Weight</button>
    </div>
  );
};

export default GoalActivity;
