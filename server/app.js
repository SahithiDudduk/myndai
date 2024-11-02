// // server/app.js
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const sequelize = require('./config/database'); // Adjust the path as necessary
// const authRoutes = require('./routes/auth'); // Adjust the path as necessary

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors()); // Enable CORS for all requests
// app.use(bodyParser.json()); // Parse JSON request bodies

// // Use the authentication routes
// app.use('/api', authRoutes(sequelize));

// // Test the database connection
// sequelize.authenticate()
//     .then(() => {
//         console.log('Connection to the database has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
// server/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Adjust the path as necessary
const authRoutes = require('./routes/auth'); // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse JSON request bodies

// Use the authentication routes
app.use('/api', authRoutes(sequelize));

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
