// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myndai', 'admin', 'Password-2024', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
