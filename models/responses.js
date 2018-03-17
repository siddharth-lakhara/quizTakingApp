

module.exports = (sequelize, DataTypes) => {
  const responses = sequelize.define('responses', {
    username: DataTypes.STRING,
    answers: DataTypes.TEXT,
  }, {});
  responses.associate = function (models) {
    // associations can be defined here
  };
  return responses;
};
