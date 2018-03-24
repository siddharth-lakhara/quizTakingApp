const Models = require('../models');

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
  handler: (req, reply) => {
    const { username } = req.params;
    calcScore(username).then((score) => {
      Models.users.update({ score }, { where: { username } }).then(() => reply({ score }));
    });
  },
}];
