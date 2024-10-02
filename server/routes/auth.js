const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure this path is correct
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log the request body

    const { mobileNumber, email, username, password } = req.body;

    // Validate input
    if (!mobileNumber || !email || !username || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      mobileNumber,
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

module.exports = router;
