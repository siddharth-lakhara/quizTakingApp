const Models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/login',
  handler: (req, reply) => {
    const { userName } = req.payload;
    Models.users.findOrCreate({ where: { username: userName } })
      .spread((createdObject, bool) => {
        if (bool) {
          Models.users.update(
            { username: userName, score: 0 },
            { where: { username: userName } },
          ).then(() => {
          });
        }
        reply();
      });
  },
}];
