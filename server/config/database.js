

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'mysql', // Adjust this if using a different database
// });
// const sequelize = new Sequelize('myndai', 'admin', 'Password-2024', {
//     host: 'myndai.c7uya6w0a35f.ap-south-1.rds.amazonaws.com',
//     dialect: 'mysql',
//   });
  
  // const sequelize = new Sequelize('userDetails', 'admin', 'Password-2024', {
  //   host: 'userdetails.czmo6we2e6t6.ap-south-1.rds.amazonaws.com',
  //   dialect: 'mysql',
  // });
  // sequelize.authenticate()
  // .then(() => {
  //   console.log('Connection has been established successfullyyyyy.');
  // })
  // .catch(err => {
  //   console.error('Unable to connect to the database:', err);
  // });

  // config/database.js
// config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // Username
    process.env.DB_PASSWORD, // Password
    {
        host: process.env.DB_HOST, // RDS Endpoint
        dialect: 'mysql',          // Database dialect
        port: process.env.DB_PORT || 3306, // Default MySQL port or from env variable
        logging: console.log,      // Enables logging; set to `false` to disable
    }
);

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;
