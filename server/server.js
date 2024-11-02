// // server.js
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const userRoutes = require('./routes/userRoutes'); // Ensure this path is correct
// const helmet = require('helmet'); // For security
// const morgan = require('morgan'); // For logging
// require('dotenv').config(); // To load environment variables
// const { Sequelize } = require('sequelize'); // Import Sequelize

// const app = express();
// const port = process.env.PORT || 5000; // Use PORT from environment or default to 5000
// const corsOptions = {
//   origin: 'https://myndai-g33ynvfrb-sahithis-projects-cca48538.vercel.app',// Replace with your client URL
//   optionsSuccessStatus: 200, // Some legacy browsers choke on 204
// };

// // Initialize Sequelize
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'mysql', // or 'postgres', 'sqlite', etc.
// });

// // Middleware
// app.use(cors(corsOptions));
// app.use(helmet());
// app.use(morgan('combined'));
// app.use(bodyParser.json());

// // Use routes
// app.use('/api', userRoutes); // Ensure this path is correct

// // Sync database function
// const syncDatabase = async () => {
//   try {
//     await sequelize.sync({ force: false }); // Use force: false in production
//     console.log("Database synced successfully");
//   } catch (error) {
//     console.error("Error syncing database:", error);
//   }
// };

// // Connect to MongoDB (if still needed)
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Call the syncDatabase function
// syncDatabase();

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// const express = require('express');
// const cors = require('cors');
// const sequelize = require('./config/database');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Configure CORS
// const cors = require('cors');
// app.use(cors({
//   origin: 'http://localhost:3000', // Adjust to your frontend URL
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// }));


// // Middleware for parsing JSON
// app.use(express.json());

// // Database connection test
// sequelize.authenticate()
//     .then(() => console.log('Connection to the database established successfully.'))
//     .catch(err => console.error('Unable to connect to the database:', err));

// // Route example
// app.post('/api/register', (req, res) => {
//     res.send('User registered successfully');
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000', // Adjust to your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('userDetails', 'admin', 'Password-2024', {
  host: 'userdetails.czmo6we2e6t6.ap-south-1.rds.amazonaws.com',
  dialect: 'mysql' // or 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the AWS RDS database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
app.post('/api/register', (req, res) => {
    res.send('User registered successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});