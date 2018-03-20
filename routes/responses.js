// GET: returns all the responses from DB of a particular user
// POST: updates responses of a user

const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/responses/{username}',
  handler: (req, reply) => {
    const { username } = req.params;
    Models.responses.findOne({
      where: { username },
      attributes: ['username', 'answers'],
    }).then((searchResults) => {
      reply(searchResults.dataValues.answers);
    });
  },

}, {
  method: 'POST',
  path: '/responses',
  handler: (req, reply) => {
    const { username, questionid, answer } = JSON.parse(req.payload.response);
    Models.responses.findOne({ where: { username } }).then((userResponse) => {
      const oldResponse = JSON.parse(userResponse.answers);
      oldResponse[questionid] = answer;
      const newResponse = JSON.stringify(oldResponse);
      Models.responses.update({ answers: newResponse }, { where: { username } })
        .then(() => { reply(); });
    });
  },

}];
