const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000; // Use PORT from environment or default to 5000

// Middleware
const allowedOrigins = [
  'http://localhost:3000', // Local development
  'https://myndai-g33ynvfrb-sahithis-projects-cca48538.vercel.app',
  'https://myapp.herokuapp.com', // Heroku app
  // Vercel deployment
];

app.use(cors({
  origin: allowedOrigins,
})); // Enable CORS for specified origins
app.use(bodyParser.json()); // Parse JSON bodies

// Use routes
app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});