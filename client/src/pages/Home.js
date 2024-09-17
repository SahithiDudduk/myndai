import React from 'react';
import './Home.css'; // Ensure this CSS file is correctly referenced
import logoTitle from '../assets/images/fithealth_logo.png'; // Adjust the path as necessary

function Home() {
  return (
    <div className="home-container">
      <div className="split-section">
        <div className="text-section">
          <h1>Welcome to MyndAI!</h1>
          <p>Your personal fitness companion to help you achieve your goals.</p>
          <p>Explore our features and get started today!</p>
        </div>
        <div className="image-section">
          <img src={logoTitle} alt="Description" className="home-image" />
        </div>
      </div>
      <div className="additional-info">
        <p>Increasing access to healthier diets. Targeted nutrition is a personalised approach to nutritional products and dietary guidance to create behavioural change towards more healthy and tailored diets as well as optimised for the individual. The work we are doing on targeted nutrition is increasing our understanding of the relative risk of malnutrition, obesity and non-communicable diseases for different groups of people. This is helping to ensure that nutritional products, services and information are designed and targeted at the groups of people they will provide the most impact for your health.</p>
      </div>
    </div>
  );
}

export default Home;
