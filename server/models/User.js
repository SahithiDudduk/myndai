//server/models.User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure this path is correct

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users', // Name of the table in your database
  timestamps: false, // Disable the automatic addition of createdAt and updatedAt fields
});

module.exports = User;
