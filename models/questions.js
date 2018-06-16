

module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    questionid: DataTypes.INTEGER,
    question: DataTypes.STRING,
    options: DataTypes.TEXT,
  }, {});
  return questions;
};
