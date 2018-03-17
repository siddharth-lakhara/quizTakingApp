// get answers from server on id basis

const getAnswers = require('./Handlers/getAnswers');

module.exports = [{
  method: 'GET',
  path: '/dev/answers/{id}',
  handler: (req, reply) => {
    const { id } = req.params;
    const url = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/${id}`;
    getAnswers(url).then((res) => {
      reply(res);
    });
  },
}];
