const Joi = require('joi');
const Models = require('../models');
const calcSwagger = require('../swaggerSpecs/calc');

const calcScore = (username) => {
  let score = 0;
  return Models.responses.findOne({ where: { username } }).then((searchResult) => {
    const userResponses = JSON.parse(searchResult.dataValues.answers);
    return Models.answers.findAll().then((results) => {
      results.map((e) => {
        const qid = e.dataValues.questionid;
        const correctAnswer = e.dataValues.answer;
        if (userResponses[qid] === correctAnswer) { score += 1; }
      });
      return score;
    });
  });
};

module.exports = [{
  method: 'GET',
  path: '/calc/{username}',
  config: {
    description: 'Calculates user score',
    notes: 'Provided a user name, returns the score',
    tags: ['api'],
    plugins: {
      'hapi-swagger': calcSwagger,
    },
    validate: {
      params: {
        username: Joi.string().min(1).max(10).error(new Error('UserName length must be between 0 and 10 characters')),
      },
    },
  },
  handler: (req, reply) => {
    const { username } = req.params;
    calcScore(username).then((score) => {
      Models.users.update({ score }, { where: { username } }).then(() => reply({ score }));
    });
  },
}];
