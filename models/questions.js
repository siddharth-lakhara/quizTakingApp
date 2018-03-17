'use strict';
module.exports = (sequelize, DataTypes) => {
  var questions = sequelize.define('questions', {
    questionid: DataTypes.INTEGER,
    question: DataTypes.STRING,
    options: DataTypes.TEXT,
    answer: DataTypes.STRING
  }, {});
  questions.associate = function(models) {
    // associations can be defined here
  };
  return questions;
};