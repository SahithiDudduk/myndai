// models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Make sure this path is correct

// Define User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure unique emails
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
  tableName: 'users', // Table name in the DB
  timestamps: true,   // Automatically manage createdAt and updatedAt fields
});

module.exports = User;
