import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure this path is correct
import PersonalizeExperience from './PersonalizeExperience';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

/*const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://3.111.58.101:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess('Login successful!');
        setError('');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error logging in.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to log in. Please try again.');
    }
  };*/

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const response = await fetch('http://3.111.58.101:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      //const result = await response.json();
      setSuccess('Login successful!');
      setError('');
      // Redirect to Personalize page
      navigate('/personalize');
    } else {
      const errorData = await response.json();
      setError(errorData.message || 'Error logging in.');
   }
  } catch (error) {
    console.error('Error:', error);
    setError('Failed to log in. Please try again.');
  }
};

  return (
    <div className="login-container">
      <h1>Login to Your Account</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;

/*import React, { useState } from 'react';
import './Login.css'; // Make sure this path is correct

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

	const handleSubmit = async (e) => {
  e.preventDefault();

    if (!email || !password) {
      setError('Both email and password are required');
      setSuccess('');
      return;
    }
  try {
      //const response = await fetch(`http://3.111.58.101:5000/api/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
      const response = await fetch(`http://localhost:5000/api/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {

      method: 'GET', // Using GET to align with the server route
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      setSuccess('Login successful!');
      setError('');
    } else {
      const errorData = await response.json();
      setError(errorData.message || 'Error logging in.');
    }
  } catch (error) {
    console.error('Error:', error);
    setError('Failed to log in. Please try again.');
  }
};

  return (
    <div className="login-container">
      <h1>Login to Your Account</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;*/
