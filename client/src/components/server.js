// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// // Initialize app
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/myndai', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Define user schema and model
// const userSchema = new mongoose.Schema({
//   fullName: String,
//   mobileNumber: String,
//   email: String,
//   password: String
// });
// const User = mongoose.model('User', userSchema);

// // Handle POST request to register
// app.post('/api/register', async (req, res) => {
//   try {
//     const { fullName, mobileNumber, email, password, confirmPassword } = req.body;

//     // Validate data here (e.g., check if passwords match)

//     // Save to database
//     const newUser = new User({ fullName, mobileNumber, email, password });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to register user' });
//   }
// });

// // Start server
// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });
