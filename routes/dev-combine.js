// get questions and respective answers from server
// and combined them in single JSON

const responseCombiner = require('./Handlers/responseCombiner');

module.exports = [{
  method: 'GET',
  path: '/dev/combine',
  handler: (req, reply) => {
    const urlQuestions = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions';
    const urlAnswers = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/';

    responseCombiner(urlQuestions, urlAnswers)
      .then((combinedJSON) => { reply(combinedJSON); });
  },
}];
