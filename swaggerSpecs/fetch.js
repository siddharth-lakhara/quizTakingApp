const Joi = require('joi');

const fetchSwagger = {
  responses: {
    200: {
      description: 'success',
      schema:
        Joi.array().items(Joi.object().keys({
          questionid: Joi.number(),
          question: Joi.string(),
          options: Joi.array(),
        })),
    },
  },
};

module.exports = fetchSwagger;

