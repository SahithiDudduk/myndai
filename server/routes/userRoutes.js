const express = require('express');
const User = require('../models/User'); // Ensure this path is correct
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const { email, mobileNumber, username, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const bcrypt = require('bcrypt');

    // In your registration route
    const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password
    const newUser = new User({ email, mobileNumber, username, password: hashedPassword });
    
    // Create a new user
    // const newUser = new User({ email, mobileNumber, username, password });
    await newUser.save();
    
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

module.exports = router;
