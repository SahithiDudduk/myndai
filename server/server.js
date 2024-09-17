const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Ensure this path is correct
const helmet = require('helmet'); // For security
const morgan = require('morgan'); // For logging
require('dotenv').config(); // To load environment variables

const app = express();
const port = process.env.PORT || 5000; // Use PORT from environment or default to 5000

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(helmet()); // Adds various security headers
app.use(morgan('combined')); // Logs requests to the console
app.use(bodyParser.json()); // Parse JSON bodies

// Use routes
app.use('/api', userRoutes); // Ensure this path is correct

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
