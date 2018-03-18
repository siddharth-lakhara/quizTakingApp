const Models = require('../models');
const Joi = require('joi');
// const LoginSwagger = require('../swaggerSpecs/login');

module.exports = [{
  method: 'POST',
  path: '/login',
  config: {
    description: 'User Login',
    notes: 'Created new user automatically',
    tags: ['api'],
    // plugins: {
    //   'hapi-swagger': LoginSwagger,
    // },
    validate: {
      payload: {
        userName: Joi.string().min(1).max(10).error(new Error('UserName length must be between 0 and 10 characters')),
      },
    },
  },
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
        reply({ message: 'Done' });
      });
  },
}];
