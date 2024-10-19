// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const { Sequelize } = require('sequelize');

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://myndai.vercel.app', // Allow the Vercel app to access this resource
  optionsSuccessStatus: 200,
};

// Initialize Sequelize for MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

// Middleware
app.use('*',cors(corsOptions));
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// Sync database and check connection
const syncDatabase = async () => {
  try {
    await sequelize.authenticate(); // Ensures connection works
    console.log('MySQL connection established');
    await sequelize.sync({ force: false }); // Sync models
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error connecting or syncing with MySQL:', error);
  }
};

// Connect to MongoDB if still needed
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start syncing MySQL database
syncDatabase();

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
