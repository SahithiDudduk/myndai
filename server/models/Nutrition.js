const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure this path is correct

const Nutrition = sequelize.define('nutrition_table', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    food_name: Sequelize.STRING,
    calories: Sequelize.INTEGER,
    protein: Sequelize.FLOAT,
    fat: Sequelize.FLOAT,
    carbs: Sequelize.FLOAT,
    Age: Sequelize.INTEGER,      // Make sure Age is defined
    Gender: Sequelize.STRING      // Make sure Gender is defined
  }, {
    timestamps: false
  });
  
  module.exports = Nutrition;
  