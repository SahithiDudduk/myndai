const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// CORS Options
// CORS Options
const corsOptions = {
  origin: ['https://myndai-g33ynvfrb-sahithis-projects-cca48538.vercel.app'], // Your Vercel URL
  credentials: true, // Allow credentials
};


app.use(cors(corsOptions)); // Enable CORS
app.use(helmet()); // Security headers
app.use(morgan('combined')); // Logging
app.use(bodyParser.json()); // Parse JSON bodies

// Use routes
app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
