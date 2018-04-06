const leadersSwagger = require('../swaggerSpecs/leaders');
const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/leaders',
  config: {
    description: 'get the leaderboard information',
    tags: ['api'],
    plugins: {
      'hapi-swagger': leadersSwagger,
    },
  },
  handler: (req, reply) => {
    Models.users.findAll({
      order: [['score', 'DESC']],
      limit: 5,
      attributes: ['username', 'score'],
    }).then((searchResults) => {
      const returnObject = searchResults.map(e => e.dataValues);
      reply(returnObject);
    });
  },
}];
