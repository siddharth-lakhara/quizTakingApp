const Joi = require('joi');

const loginSwagger = {
  responses: {
    200: {
      description: 'Success',
      schema: Joi.object({
        userName: Joi.string().example('demoUser'),
      }),
    },
    400: {
      description: 'Invalid input',
    },
  },
};

module.exports = loginSwagger;
