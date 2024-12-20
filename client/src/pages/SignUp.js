import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { ReactTyped as Typed } from 'react-typed';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    setError('');
    if (step === 1 && !email) return setError('Please enter a valid email.');
    if (step === 2 && !mobileNumber) return setError('Please enter a valid mobile number.');
    if (step === 3 && !username) return setError('Please enter a username.');
    if (step === 4 && !password) return setError('Please enter a valid password.');
    if (step === 5 && password !== confirmPassword) return setError('Passwords do not match.');
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = { mobileNumber, email, username, password };
      const API_URL = 'http://3.111.58.101:5000/api';

      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      setLoading(false);

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed.');
        return;
      }

      const data = await response.json();
      setSuccess(data.message);
      setIsRegistered(true);
      navigate('/login'); // Navigate to the login page after successful registration

    } catch (error) {
      setError('An error occurred during registration.');
    }
  };

  return (
    <div className="signup-container">
      {!showInput ? (
        <h1>
          <Typed
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
            <div className="login-message">
              <p>{success || 'Registration successful! Please login to explore.'}</p>
              {/* Optional, if you want to show some message */}
            </div>
          ) : (
            <form className="signup-form" onSubmit={handleSubmit}>
              {/* Step 1: Enter Email */}
              <div className="form-group">
                <label htmlFor="email">Enter your email*</label>
                <div className="input-group">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={step > 1 || loading}
                  />
                  {step === 1 && (
                    <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                      Continue
                    </button>
                  )}
                </div>
              </div>

              {/* Step 2: Enter Mobile Number */}
              {step >= 2 && (
                <div className="form-group">
                  <label htmlFor="mobileNumber">Enter your mobile number*</label>
                  <div className="input-group">
                    <input
                      id="mobileNumber"
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                      disabled={step > 2 || loading}
                    />
                    {step === 2 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Enter Username */}
              {step >= 3 && (
                <div className="form-group">
                  <label htmlFor="username">Choose a username*</label>
                  <div className="input-group">
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      disabled={step > 3 || loading}
                    />
                    {step === 3 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Step 4: Create Password */}
              {step >= 4 && (
                <div className="form-group">
                  <label htmlFor="password">Create a password*</label>
                  <div className="input-group">
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                    {step === 4 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Step 5: Confirm Password */}
              {step >= 5 && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password*</label>
                  <div className="input-group">
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                    <button type="submit" className="continue-button" disabled={loading}>
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

      {step >= 4 && (
        <div className="password-strength-container">
          <PasswordStrengthBar password={password} />
        </div>
      )}
    </div>
  );
}

export default SignUp;

//client/SignUp.js
/*import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { ReactTyped as Typed } from 'react-typed';
import './SignUp.css';
import { useNavigate } from 'react-router-dom'; 

function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const handleContinue = () => {
    setError('');
    if (step === 1 && !email) return setError('Please enter a valid email.');
    if (step === 2 && !mobileNumber) return setError('Please enter a valid mobile number.');
    if (step === 3 && !username) return setError('Please enter a username.');
    if (step === 4 && !password) return setError('Please enter a valid password.');
    if (step === 5 && password !== confirmPassword) return setError('Passwords do not match.');
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = { mobileNumber, email, username, password };
      const API_URL = 'http://3.111.58.101:5000/api';

      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      setLoading(false);

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed.');
        return;
      }

      const data = await response.json();
      setSuccess(data.message);
      setIsRegistered(true);
      setShowLoginMessage(true); // Show the login message instead of redirecting to personalize

    } catch (error) {
      setError('An error occurred during registration.');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Assuming your login route is '/login'
  };

  return (
    <div className="signup-container">
      {!showInput ? (
        <h1>
          <Typed
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
            // Display the login message after successful registration
            showLoginMessage && (
              <div className="login-message">
                <p>{success || 'Registration successful! Please login to explore.'}</p>
                <button onClick={handleLoginRedirect} className="login-button">
                  Login to Explore
                </button>
              </div>
            )
          ) : (
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Enter your email*</label>
                <div className="input-group">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={step > 1 || loading}
                  />
                  {step === 1 && (
                    <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                      Continue
                    </button>
                  )}
                </div>
              </div>

              {step >= 2 && (
                <div className="form-group">
                  <label htmlFor="mobileNumber">Enter your mobile number*</label>
                  <div className="input-group">
                    <input
                      id="mobileNumber"
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                      disabled={step > 2 || loading}
                    />
                    {step === 2 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {step >= 3 && (
                <div className="form-group">
                  <label htmlFor="username">Choose a username*</label>
                  <div className="input-group">
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      disabled={step > 3 || loading}
                    />
                    {step === 3 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {step >= 4 && (
                <div className="form-group">
                  <label htmlFor="password">Create a password*</label>
                  <div className="input-group">
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                    {step === 4 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {step >= 5 && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password*</label>
                  <div className="input-group">
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                    <button type="submit" className="continue-button" disabled={loading}>
                      Submit
                    </button>
                  </div>
                </div>
              )}

              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}
            </form>
          )}
        </div>
      )}

      {step >= 4 && (
        <div className="password-strength-container">
          <PasswordStrengthBar password={password} />
        </div>
      )}
    </div>
  );
}

export default SignUp;*/

/*import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { ReactTyped as Typed } from 'react-typed';
import './SignUp.css';
import { useNavigate } from 'react-router-dom'; 
import PersonalizeExperience from './PersonalizeExperience';
import login from './Login';
function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    setError('');
    if (step === 1 && !email) return setError('Please enter a valid email.');
    if (step === 2 && !mobileNumber) return setError('Please enter a valid mobile number.');
    if (step === 3 && !username) return setError('Please enter a username.');
    if (step === 4 && !password) return setError('Please enter a valid password.');
    if (step === 5 && password !== confirmPassword) return setError('Passwords do not match.');
    setStep(step + 1);
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = { mobileNumber, email, username, password };
      const API_URL = 'http://3.111.58.101:5000/api';

      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      setLoading(false);

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed.');
        return;
      }

      const data = await response.json();
      setSuccess(data.message);
      setIsRegistered(true);
      navigate('/personalize');
    } catch (error) {
      setError('An error occurred during registration.');
    }
  };	

  return (
    <div className="signup-container">
      {!showInput ? (
        <h1>
          <Typed
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
            <div>
              <p className="success-message">
                Registration complete! Login to explore.
              </p>
            </div>
          ) : (
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Enter your email*</label>
                <div className="input-group">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={step > 1 || loading}
                  />
                  {step === 1 && (
                    <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                      Continue
                    </button>
                  )}
                </div>
              </div>

              {step >= 2 && (
                <div className="form-group">
                  <label htmlFor="mobileNumber">Enter your mobile number*</label>
                  <div className="input-group">
                    <input
                      id="mobileNumber"
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                      disabled={step > 2 || loading}
                    />
                    {step === 2 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {step >= 3 && (
                <div className="form-group">
                  <label htmlFor="username">Choose a username*</label>
                  <div className="input-group">
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      disabled={step > 3 || loading}
                    />
                    {step === 3 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {step >= 4 && (
                <div className="form-group">
                  <label htmlFor="password">Create a password*</label>
                  <div className="input-group">
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                    {step === 4 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {step >= 5 && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password*</label>
                  <div className="input-group">
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                    <button type="submit" className="continue-button" disabled={loading}>
                      Submit
                    </button>
                  </div>
                </div>
              )}

              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}
            </form>
          )}
        </div>
      )}

      {step >= 4 && (
        <div className="password-strength-container">
          <PasswordStrengthBar password={password} />
        </div>
      )}
    </div>
  );
}

export default SignUp;*/

/*import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { ReactTyped as Typed } from 'react-typed';
import './SignUp.css';
import { useNavigate } from 'react-router-dom'; 
import PersonalizeExperience from './PersonalizeExperience';

function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    setError('');
    if (step === 1 && !email) return setError('Please enter a valid email.');
    if (step === 2 && !mobileNumber) return setError('Please enter a valid mobile number.');
    if (step === 3 && !username) return setError('Please enter a username.');
    if (step === 4 && !password) return setError('Please enter a valid password.');
    if (step === 5 && password !== confirmPassword) return setError('Passwords do not match.');
    setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = { mobileNumber, email, username, password };
      const API_URL = 'http://3.111.58.101:5000/api';

      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      setLoading(false);

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed.');
        return;
      }

      const data = await response.json();
      setSuccess(data.message);
      setIsRegistered(true);
      navigate('/personalize');
    } catch (error) {
      setError('An error occurred during registration.');
    }
  };

  return (
    <div className="signup-container">
      {!showInput ? (
        <h1>
          <Typed
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
            <PersonalizeExperience />
          ) : (
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Enter your email*</label>
                <div className="input-group">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={step > 1 || loading}
                  />
                  {step === 1 && (
                    <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                      Continue
                    </button>
                  )}
                </div>
              </div>

              {step >= 2 && (
                <div className="form-group">
                  <label htmlFor="mobileNumber">Enter your mobile number*</label>
                  <div className="input-group">
                    <input
                      id="mobileNumber"
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                      disabled={step > 2 || loading}
                    />
                    {step === 2 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {step >= 3 && (
                <div className="form-group">
                  <label htmlFor="username">Choose a username*</label>
                  <div className="input-group">
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      disabled={step > 3 || loading}
                    />
                    {step === 3 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {step >= 4 && (
                <div className="form-group">
                  <label htmlFor="password">Create a password*</label>
                  <div className="input-group">
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                    {step === 4 && (
                      <button type="button" className="continue-button" onClick={handleContinue} disabled={loading}>
                        Continue
                      </button>
                    )}
                  </div>
                </div>
              )}

              {step >= 5 && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password*</label>
                  <div className="input-group">
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                    <button type="submit" className="continue-button" disabled={loading}>
                      Submit
                    </button>
                  </div>
                </div>
              )}

              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}
            </form>
          )}
        </div>
      )}

      {step >= 4 && (
        <div className="password-strength-container">
          <PasswordStrengthBar password={password} />
        </div>
      )}
    </div>
  );
}

export default SignUp;*/
