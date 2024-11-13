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

// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Configure CORS
// const cors = require('cors');
// // app.use(cors({
// //   origin: 'http://localhost:3000', // Adjust to your frontend URL
// //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// //   credentials: true,
// // }));

// // Update your allowed origins list
// const allowedOrigins = [
//   'http://localhost:3000', // local frontend
//   'https://myndai-git-main-sahithis-projects-cca48538.vercel.app', // vercel frontend
// ];

// // Set up CORS options
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
// };

// app.use(cors(corsOptions));

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('userDetails', 'admin', 'Password-2024', {
//   host: 'userdetails.czmo6we2e6t6.ap-south-1.rds.amazonaws.com',
//   dialect: 'mysql' // or 'postgres'
// });

// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection to the AWS RDS database has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
// app.post('/api/register', (req, res) => {
//     res.send('User registered successfully');
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// server.js
// server.js
// 
// server.js (Node.js with Express and MySQL)

// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');

// const cors = require('cors');
// const app = express();
// app.use(bodyParser.json());

// // app.use(cors({
// //     origin: 'http://localhost:3000' // or any specific domain
// // }));
// // Allow requests from all origins (you can specify a particular origin if needed)
// app.use(cors()); // This will allow all origins
// const db = mysql.createConnection({
//   host: '3.111.58.101',  // EC2 private IP if accessing locally or public IP if external
//   user: 'root',
//   password: 'Password@123',
//   database: 'userDetails',
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL');
// });

// // API route for registering a user
// app.post('/api/register', (req, res) => {
//   const { username, email } = req.body;

//   const query = 'INSERT INTO users (username, email) VALUES (?, ?)';
//   db.query(query, [username, email], (err, result) => {
//     if (err) {
//       console.error('Error inserting data', err);
//       res.status(500).json({ message: 'Database error' });
//     } else {
//       res.status(200).json({ message: 'User registered successfully', userId: result.insertId });
//     }
//   });
// });

// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors()); // This will allow all origins

const db = mysql.createConnection({
  host: '3.111.58.101',  // Replace with your server IP
  user: 'root',
  password: 'Password@123',
  database: 'userDetails',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
});
app.post('/api/register', (req, res) => {
    const { email, mobileNumber, username, password } = req.body;
  
    if (!email || !mobileNumber || !username || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const query = 'INSERT INTO users (email, mobileNumber, username, password) VALUES (?, ?, ?, ?)';
    
    db.query(query, [email, mobileNumber, username, password], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).json({ message: 'Registration failed' });
      }
  
      res.status(201).json({ message: 'Registration successful' });
    });
  });
// Define a route to check the connection and get columns
app.get('/api/checkConnection', (req, res) => {
  const query = 'SELECT * FROM users LIMIT 1';  // Get the first row to check if table exists

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ message: 'Error fetching users' });
    }

    // If query is successful, log the columns from the first row
    if (results.length > 0) {
      console.log('Columns:', Object.keys(results[0])); // This will log the column names
      res.status(200).json({ message: 'Connection successful', columns: Object.keys(results[0]) });
    } else {
      res.status(404).json({ message: 'No data found in users table' });
    }
  });
});
app.get('/api/getUsers', (req, res) => {
  const query = 'SELECT * FROM users';  // Fetch all users from the table

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ message: 'Error fetching users' });
    }
    res.status(200).json({ users: results });  // Return the user data
  });
});

const port = 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
