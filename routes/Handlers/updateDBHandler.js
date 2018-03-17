const Models = require('../../models');

const updateDBHandler = (combinedJSON) => {
  Models.questions.destroy({ where: {} });
  Models.answers.destroy({ where: {} });
  const PromiseArray = [];
  combinedJSON.allQuestions.map((questionElement) => {
    const {
      questionId, question, answer, ...options
    } = questionElement;
    const optionsArray = Object.keys(options).map(elem => options[elem]);
    PromiseArray.push(Models.questions.create({
      questionid: questionId,
      question,
      options: JSON.stringify(optionsArray),
    }).then(() => {
      Models.answers.create({
        questionid: questionId,
        answer,
      });
    }));
  });
  return Promise.all(PromiseArray).then(() => { });
};

module.exports = updateDBHandler;
