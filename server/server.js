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
// app.use(cors({
//   origin: ['http://localhost:3000', 'https://82af-2401-4900-1f29-7355-8ed0-64de-a3df-647b.ngrok-free.app/'], // Update with your client origins
//   methods: ['GET', 'POST'],
//   credentials: true
// }));

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' https://82af-2401-4900-1f29-7355-8ed0-64de-a3df-647b.ngrok-free.app/; script-src 'self'; style-src 'self';"
  );
  next();
});
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
