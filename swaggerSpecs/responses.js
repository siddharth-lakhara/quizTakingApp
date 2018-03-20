const Joi = require('joi');

const responsesSwagger = {
  GET: {
    responses: {
      200: {
        description: 'Success',
        schema: Joi.object().keys({
          questionid: Joi.number().example('New Delhi'),
        }),
      },
      404: {
        description: 'Invalid User',
      },
    },
  },
  POST: {
    responses: {
      200: {
        description: 'Success',
      },
      404: {
        description: 'Invalid User',
      },
    },
  },
};

module.exports = responsesSwagger;
