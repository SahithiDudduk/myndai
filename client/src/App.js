import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PersonalizeExperience from './pages/PersonalizeExperience';
import GenderSelection from './pages/GenderSelection';
import DietarySelection from './pages/DietarySelection';
import MedicalCondition from './pages/MedicalCondition';
import GoalSetting from './pages/GoalSetting';
import AgeSelection from './pages/AgeSelection';
import WeightSelection from './pages/WeightSelection';
import HeightSelection from './pages/HeightSelection';
import Bmi from './pages/Bmi'; // adjust path based on actual structure

import './App.css';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/personalize" element={<PersonalizeExperience />} />
            <Route path="/gender" element={<GenderSelection />} />
            <Route path="/age" element={<AgeSelection />} />
            <Route path="/weight" element={<WeightSelection />} />
            <Route path="/height" element={<HeightSelection />} />
            <Route path="/bmi" element={<Bmi/>} />

            <Route path="/dietary" element={<DietarySelection />} />
            <Route path="/medical" element={<MedicalCondition />} />
            <Route path="/goals" element={<GoalSetting />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
