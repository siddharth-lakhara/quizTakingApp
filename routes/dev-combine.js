// get questions and respective answers from server
// and combined them in single JSON

const getAllQuestions = require('./Handlers/getQuestions');
const getAnswers = require('./Handlers/getAnswers');

module.exports = [{
  method: 'GET',
  path: '/dev/combine',
  handler: (req, reply) => {
    const urlQuestions = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions';
    const urlAnswers = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/';

    getAllQuestions(urlQuestions).then((res) => {
      const fetchAnswerPromise = res.allQuestions.map((questionObject) => {
        const id = questionObject.questionId;
        return getAnswers(urlAnswers + id);
      });
      Promise.all(fetchAnswerPromise).then((resolvedPromise) => {
        console.log(resolvedPromise);
        resolvedPromise.map((elem, index) => {
          res.allQuestions[index].answer = elem.answer;
        });
        reply(res);
      });
    });
  },
}];
