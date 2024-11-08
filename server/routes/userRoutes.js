// server/routes/userRoutes.js
const express = require('express');
const User = require('../models/User'); // Ensure this path is correct
const router = express.Router();
const bcrypt = require('bcrypt');

const Nutrition = require('../models/Nutrition'); // Sequelize model for nutrition_table

// Route to fetch data based on Age and Gender
router.get('/nutrition', async (req, res) => {
  const { age, gender } = req.query; // Get age and gender from query parameters

  try {
    // Fetch data from the nutrition_table where age and gender match
    const nutritionData = await Nutrition.findAll({
      where: {
        Age: age,         // Assuming column name is 'Age'
        Gender: gender    // Assuming column name is 'Gender'
      }
    });
    res.status(200).json(nutritionData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching nutrition data', error: error.message });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { mobileNumber, email, username, password } = req.body;

    // Check if all fields are provided
    if (!mobileNumber || !email || !username || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await User.create({
      mobileNumber,
      email,
      username,
      password: hashedPassword,
    });

    // Generate a token for the new user
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});
module.exports = router;
