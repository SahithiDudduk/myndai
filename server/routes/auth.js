// // server/api/register.js or server/routes/auth.js
// const express = require('express');
// const bcrypt = require('bcrypt');
// const User = require('../models/User'); // Ensure path is correct

// const router = express.Router();

// router.post('/register', async (req, res) => {
//   const { email, mobileNumber, username, password } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the new user in the database
//     const newUser = await User.create({
//       email,
//       mobileNumber,
//       username,
//       password: hashedPassword,
//     });

//     res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
//   } catch (error) {
//     console.error('Error during user registration:', error);
//     res.status(500).json({ message: 'Error registering user', error: error.message });
//   }
// });

// module.exports = router;

// // // server/routes/auth.js
// // const express = require('express');
// // const bcrypt = require('bcrypt');
// // const router = express.Router();
// // const User = require('../models/User'); // Ensure this path is correct

// // router.post('/register', async (req, res) => {
// //   const { email, mobileNumber, username, password } = req.body;

// //   try {
// //     // Check if user already exists
// //     const existingUser = await User.findOne({ where: { email } });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'User already exists' });
// //     }

// //     // Hash the password
// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const newUser = await User.create({ 
// //       email, 
// //       mobileNumber, 
// //       username, 
// //       password: hashedPassword 
// //     });
    
// //     res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error registering user', error: error.message });
// //   }
// // });

// // module.exports = router; // Export the router
// server/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const router = express.Router();
const User = require('../models/User'); // Adjust the path as necessary

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        mobileNumber: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

    router.post('/register', async (req, res) => {
        const { email, mobileNumber, username, password } = req.body;

        try {
            // Check if user already exists
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ email, mobileNumber, username, password: hashedPassword });
            
            res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
        } catch (error) {
            res.status(500).json({ message: 'Error registering user', error: error.message });
        }
    });

    return router;
};
