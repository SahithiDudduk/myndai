import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Ensure this CSS file contains necessary styles
import logoImage from '../assets/images/logo_image.jpeg';

function Header() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signup');
  };

  const handleLoginInClick = () => {
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <div className="logo-container">
          <a href="/" aria-label="Company Home">
            <img src={logoImage} alt="Company Logo" className="logo-image" />
          </a>
        </div>
        <span className="company-name">MyndAI</span>
        <div className="nav-links">
          <Link to="/">Home</Link>
        </div>
        <button className="signin-button" onClick={handleSignInClick}>Sign In</button>
        <button className="login-button" onClick={handleLoginInClick}>Login</button>

      </nav>
    </header>
  );
}

export default Header;
