const Joi = require('joi');

const calcSwagger = {
  responses: {
    200: {
      description: 'Returns User score',
      schema: Joi.object({
        username: Joi.string().example('demoUser'),
      }),
    },
    400: {
      description: 'Invalid Input',
    },
  },
};

module.exports = calcSwagger;
