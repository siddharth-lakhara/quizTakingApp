
module.exports = (sequelize, DataTypes) => {
  const answers = sequelize.define('answers', {
    questionid: DataTypes.INTEGER,
    answer: DataTypes.STRING,
  }, {});
  return answers;
};
