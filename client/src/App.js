import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PersonalizeExperience from './pages/PersonalizeExperience';
import GenderSelection from './pages/GenderSelection';
import DietaryPreferences from './pages/DietaryPreferences';
import MedicalConditions from './pages/MedicalConditions';
import GoalSetting from './pages/GoalSetting';
import AgeSelection from './pages/AgeSelection';
import WeightSelection from './pages/WeightSelection';
import HeightSelection from './pages/HeightSelection';
import FoodChoices from './pages/FoodChoices';
import mealFrequency from './pages/MealFrequency'
import Bmi from './pages/Bmi';
import ProgressIndicator from './components/ProgressIndicator';
import { checkDatabaseConnection } from './pages/checkConnection';

import './App.css';
import MealFrequency from './pages/MealFrequency';
import PhysicalActivitySelection from './pages/PhysicalActivitySelection';

function App() {
  const [completedSteps, setCompletedSteps] = useState([false, false, false, false]);
  const [userData, setUserData] = useState({
    height: '',
    weight: '',
    age: '',
    gender: '',
    // Add more fields as needed
  });
  useEffect(() => {
    checkDatabaseConnection();  // Call to check DB connection
  }, []);  // Empty dependency array means this runs once when the component mounts

  const location = useLocation();

  const showProgressIndicator = ['/gender', '/weight', '/height', '/age'].includes(location.pathname);

  return (
    <div className="app-container">
      <Header />
      {showProgressIndicator && <ProgressIndicator completedSteps={completedSteps} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/personalize" element={<PersonalizeExperience setCompletedSteps={setCompletedSteps} />} />
          <Route path="/gender" element={<GenderSelection setCompletedSteps={setCompletedSteps} />} />
          <Route 
          path="/age" 
          element={<AgeSelection completedSteps={completedSteps} setCompletedSteps={setCompletedSteps} />} 
        />          
        <Route 
          path="/weight" 
          element={<WeightSelection completedSteps={completedSteps} setCompletedSteps={setCompletedSteps} />} 
        />
        <Route 
          path="/height" 
          element={<HeightSelection completedSteps={completedSteps} setCompletedSteps={setCompletedSteps} />} 
        />

          <Route path="/bmi" element={<Bmi />} />
        <Route 
          path="/dietary" 
          element={<DietaryPreferences completedSteps={completedSteps} setCompletedSteps={setCompletedSteps} />} 
        />
        <Route 
          path="/foodChoices" 
          element={<FoodChoices completedSteps={completedSteps} setCompletedSteps={setCompletedSteps} />} 
        />
        <Route 
          path="/mealFrequency" 
          element={<MealFrequency completedSteps={completedSteps} setCompletedSteps={setCompletedSteps} />} 
        />
        <Route 
          path="/PhysicalActivitySelection" 
          element={<PhysicalActivitySelection completedSteps={completedSteps} setCompletedSteps={setCompletedSteps} />} 
        />
        <Route 
          path="/medical" 
          element={<MedicalConditions completedSteps={completedSteps} setCompletedSteps={setCompletedSteps} />} 
        />
        <Route 
          path="/goals" 
          element={<GoalSetting completedSteps={completedSteps} setCompletedSteps={setCompletedSteps} />} 
        />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
