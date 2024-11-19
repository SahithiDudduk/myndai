import React, { useState } from 'react';

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
  },
  result: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'inline-block',
    textAlign: 'left',
  },
};

// Function to fetch nutrition data from the EC2 API
const fetchNutritionData = async (goal) => {
  const age = 25;
  const gender = 'Male';
  const ec2PublicIP = 'http://3.111.58.101:5000'; // Replace <EC2-PUBLIC-IP> with your EC2 instance's public IP

  try {
    const response = await fetch(`${ec2PublicIP}/api/nutrition?age=${age}&gender=${gender}&goal=${goal}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("data is", data);
    return data; // return the nutrition data
  } catch (error) {
    console.error('Error fetching nutrition data:', error.message);
    return null;
  }
};

const GoalActivity = () => {
  const [nutritionData, setNutritionData] = useState(null);

  // Handle the button click event and trigger fetch
  const handleGoalSelection = async (goal) => {
    console.log(`Selected Goal: ${goal}`);
    const data = await fetchNutritionData(goal); // Call API with the selected goal

    if (data) {
      setNutritionData(data); // Update the state with fetched data
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>What brings you to MyndAI?</h1>

      <button style={styles.button} onClick={() => handleGoalSelection('Weight Loss')}>Weight Loss</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Gain Strength')}>Gain Strength</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Get Flexible')}>Get Flexible</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Meditation')}>Meditation</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Sleep Well')}>Sleep Well</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Gain Weight')}>Gain Weight</button>

      {nutritionData && (
        <div style={styles.result}>
          <h3>Nutrition Information</h3>
          <p><strong>Daily Calorie Target:</strong> {nutritionData.Daily_Calorie_Target}</p>
          <p><strong>Protein:</strong> {nutritionData.Protein}g</p>
          <p><strong>Carbohydrates:</strong> {nutritionData.Carbohydrates}g</p>
          <p><strong>Fat:</strong> {nutritionData.Fat}g</p>
          <p><strong>Breakfast Suggestion:</strong> {nutritionData.Breakfast_Suggestion}</p>
          <p><strong>Lunch Suggestion:</strong> {nutritionData.Lunch_Suggestion}</p>
          <p><strong>Dinner Suggestion:</strong> {nutritionData.Dinner_Suggestion}</p>
          <p><strong>Snack Suggestion:</strong> {nutritionData.Snack_Suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default GoalActivity;

/*import React from 'react';

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

const fetchNutritionData = async (goal) => {
  try {
    const age = 26;
    const gender = 'Male';
    const response = await fetch(`/api/nutrition?age=${age}&gender=${gender}&goal=${goal}`);

    const textResponse = await response.text();
    console.log('Raw response:', textResponse);

    const data = JSON.parse(textResponse);
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
  }
};


const GoalActivity = () => {
  const handleGoalSelection = (goal) => {
    console.log(`Selected Goal: ${goal}`);
    fetchNutritionData(goal); // Call API with the selected goal
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>What brings you to MyndAI?</h1>

      <button style={styles.button} onClick={() => handleGoalSelection('Loose Weight')}>Loose Weight</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Gain Strength')}>Gain Strength</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Get Flexible')}>Get Flexible</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Meditation')}>Meditation</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Sleep Well')}>Sleep Well</button>
      <button style={styles.button} onClick={() => handleGoalSelection('Gain Weight')}>Gain Weight</button>
    </div>
  );
};

export default GoalActivity;*/
