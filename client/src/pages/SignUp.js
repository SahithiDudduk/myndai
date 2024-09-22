import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { ReactTyped } from 'react-typed';
import './SignUp.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PersonalizeExperience from './PersonalizeExperience'; // Import GenderSelection

function SignUp() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // New state

  const handleContinue = () => {
    setError('');

    // Validation logic for each step
    if (step === 1 && !email) {
      setError('Please enter a valid email.');
      return;
    }

    if (step === 2 && !mobileNumber) {
      setError('Please enter a valid mobile number.');
      return;
    }

    if (step === 3 && !username) {
      setError('Please enter a username.');
      return;
    }

    if (step === 4 && !password) {
      setError('Please enter a valid password.');
      return;
    }

    if (step === 5 && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = { mobileNumber, email, username, password };
      console.log('Submitting user data:', userData);

      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Registration error:', errorData);
        setError(errorData.message || 'Registration failed.');
        return;
      }

      const data = await response.json();
      setSuccess(data.message);
      setError('');
      setIsRegistered(true); // Set registration state to true
      navigate('/personalize');

    } catch (error) {
      setError('An error occurred during registration.');
    }
  };

  return (
    <div className="signup-container">
      {!showInput ? (
        <h1>
          <ReactTyped
            strings={["Welcome to MyndAI!", "Let’s begin the adventure"]}
            typeSpeed={50}
            backSpeed={30}
            loop={false}
            onComplete={() => setShowInput(true)}
          />
        </h1>
      ) : (
        <div className="signup-form-container">
          {isRegistered ? (
            <PersonalizeExperience /> // Render GenderSelection after successful registration
          ) : (
            <form className="signup-form" onSubmit={handleSubmit}>
              {/* Step 1: Enter Email */}
              <div className="form-group">
                <label>Enter your email*</label>
                <div className="input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={step > 1}
                  />
                  {step === 1 && (
                    <button type="button" className="continue-button" onClick={handleContinue}>
                      Continue
                    </button>
                  )}
                </div>
              </div>

              {/* Step 2: Enter Mobile Number */}
              {step >= 2 && (
                <div className="form-group">
                  <label>Enter your mobile number*</label>
                  <div className="input-group">
                    <input
                      type="mobileNumber"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                      disabled={step > 2}
                    />
                    {step === 2 && (
                      <button type="button" className="continue-button" onClick={handleContinue}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Enter Username */}
              {step >= 3 && (
                <div className="form-group">
                  <label>Choose a username*</label>
                  <div className="input-group">
                    <input
                      type="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      disabled={step > 3}
                    />
                    {step === 3 && (
                      <button type="button" className="continue-button" onClick={handleContinue}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Step 4: Create Password */}
              {step >= 4 && (
                <div className="form-group">
                  <label>Create a password*</label>
                  <div className="input-group">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {step === 4 && (
                      <button type="button" className="continue-button" onClick={handleContinue}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Step 5: Confirm Password */}
              {step >= 5 && (
                <div className="form-group">
                  <label>Confirm Password*</label>
                  <div className="input-group">
                    <input
                      type="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <button type="submit" className="continue-button">
                      Submit
                    </button>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}
            </form>
          )}
        </div>
      )}

      {/* Password Strength Bar should appear below the form */}
      {step >= 4 && (
        <div className="password-strength-container">
          <PasswordStrengthBar password={password} />
        </div>
      )}
    </div>
  );
}

export default SignUp;
