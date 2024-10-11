import React from 'react';

const GoalActivity = () => {
  return (
    <div style={styles.container}>
      {/* Title */}
      <h1 style={styles.title}>What brings you to MyndAI?</h1>

      {/* Options */}
      <button style={styles.button} onClick={() => { /* Handle action */ }}>Loose Weight</button>
      <button style={styles.button} onClick={() => { /* Handle action */ }}>Gain Strength</button>
      <button style={styles.button} onClick={() => { /* Handle action */ }}>Get Flexible</button>
      <button style={styles.button} onClick={() => { /* Handle action */ }}>Meditation</button>
      <button style={styles.button} onClick={() => { /* Handle action */ }}>Sleep Well</button>
      <button style={styles.button} onClick={() => { /* Handle action */ }}>Gain Weight</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFF5EE',
    padding: '16px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '32px 0',
  },
  button: {
    width: '100%',
    padding: '10px',
    marginTop: '16px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default GoalActivity;
