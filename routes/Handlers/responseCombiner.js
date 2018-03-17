
const getAllQuestions = require('./getQuestions');
const getAnswers = require('./getAnswers');

const responseCombiner = (urlQuestions, urlAnswers) => getAllQuestions(urlQuestions).then((res) => {
  const fetchAnswerPromise = res.allQuestions.map((questionObject) => {
    const id = questionObject.questionId;
    return getAnswers(urlAnswers + id);
  });
  return Promise.all(fetchAnswerPromise).then((resolvedPromise) => {
    //   console.log(resolvedPromise);
    resolvedPromise.map((elem, index) => {
      res.allQuestions[index].answer = elem.answer;
    });
    return (res);
  });
});

module.exports = responseCombiner;

