const Joi = require('joi');

const updateDBSwagger = {
  responses: {
    200: {
      description: 'Success',
      schema: Joi.string(),
    },
    400: {
      description: 'Invalid input',
    },
  },
};

module.exports = updateDBSwagger;
