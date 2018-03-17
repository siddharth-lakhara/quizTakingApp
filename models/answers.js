'use strict';
module.exports = (sequelize, DataTypes) => {
  var answers = sequelize.define('answers', {
    username: DataTypes.STRING,
    responses: DataTypes.TEXT
  }, {});
  answers.associate = function(models) {
    // associations can be defined here
  };
  return answers;
};