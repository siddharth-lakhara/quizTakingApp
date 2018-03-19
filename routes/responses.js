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
      reply(searchResults.datavalues);
    });
  },

}, {
  method: 'POST',
  path: '/responses',
  handler: (req, reply) => {
    reply('here');
  },

}];
