// GET: returns all the responses from DB of a particular user
// POST: updates responses of a user

const Models = require('../models');
const Joi = require('joi');

const responsesSwagger = require('../swaggerSpecs/responses');

module.exports = [{
  method: 'GET',
  path: '/responses/{username}',
  config: {
    description: 'Gets User responses from DB',
    notes: 'Send username as parameter, get ',
    tags: ['api'],
    plugins: {
      'hapi-swagger': responsesSwagger.GET,
    },
    validate: {
      params: {
        username: Joi.string().example('siddharth'),
      },
    },
  },
  handler: (req, reply) => {
    const { username } = req.params;
    Models.responses.findOne({
      where: { username },
      attributes: ['username', 'answers'],
    }).then((searchResults) => {
      if (searchResults !== undefined) {
        reply(searchResults.dataValues.answers);
      } else {
        reply({
          statusCode: 404,
          message: 'User not found',
        });
      }
    });
  },

}, {
  method: 'POST',
  path: '/responses',
  config: {
    description: 'Updates user response',
    notes: 'Send username, questionid and answer in POST body',
    tags: ['api'],
    plugins: {
      'hapi-swagger': responsesSwagger.POST,
    },
    // validate: {
    //   body: {
    //     response: Joi.object().keys({
    //       username: Joi.string().regex(/^[a-zA-Z0-9]+$/).example('siddharth'),
    //       questionid: Joi.number().example(12),
    //       answer: Joi.string().example('New Delhi'),
    //     }),
    //   },
    // },
  },
  handler: (req, reply) => {
    const { username, questionid, answer } = JSON.parse(req.payload);
    Models.responses.findOne({ where: { username } }).then((userResponse) => {
      if (userResponse !== undefined) {
        const oldResponse = JSON.parse(userResponse.answers);
        oldResponse[questionid] = answer;
        const newResponse = JSON.stringify(oldResponse);
        Models.responses.update({ answers: newResponse }, { where: { username } })
          .then(() => { reply(); });
      } else {
        reply({ statusCode: 404, message: 'Username not found' });
      }
    });
  },

}];
