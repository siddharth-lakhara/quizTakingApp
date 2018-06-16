

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    score: DataTypes.INTEGER,
  }, {});
  return users;
};
