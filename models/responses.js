

module.exports = (sequelize, DataTypes) => {
  const responses = sequelize.define('responses', {
    username: DataTypes.STRING,
    answers: DataTypes.TEXT,
  }, {});
  return responses;
};
