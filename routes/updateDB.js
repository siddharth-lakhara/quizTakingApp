
const responseCombiner = require('./Handlers/responseCombiner');
const updateDBHandler = require('./Handlers/updateDBHandler');
const updateDBSwagger = require('../swaggerSpecs/updateDB');

module.exports = [{
  method: 'GET',
  path: '/updatedb',
  config: {
    description: 'Update database',
    notes: 'Clears the existing database entry and updates database',
    tags: ['api'],
    plugins: {
      'hapi-swagger': updateDBSwagger,
    },
  },
  handler: (req, reply) => {
    const urlQuestions = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions';
    const urlAnswers = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/';
    responseCombiner(urlQuestions, urlAnswers).then((combinedJSON) => {
      updateDBHandler(combinedJSON).then(() => {
        reply('DB Updated');
      });
    });
  },
}];
