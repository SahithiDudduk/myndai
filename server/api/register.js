// server/register.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust path if necessary

const app = express();
app.use(express.json()); // Parse JSON request body

// API to handle user registration
app.post('/register', async (req, res) => {
    const { email, mobileNumber, username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save new user
        const newUser = await User.create({
            email,
            mobileNumber,
            username,
            password: hashedPassword
        });

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
