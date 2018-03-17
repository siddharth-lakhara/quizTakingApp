// get all questions from server

const getAllQuestions = require('./Handlers/getQuestions');

module.exports = [{
  method: 'GET',
  path: '/dev/questions',
  handler: (req, reply) => {
    const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions';
    getAllQuestions(url).then((res) => {
      reply(res);
    });
  },
}];
