const Models = require('../models');
const fetchSwagger = require('../swaggerSpecs/fetch');

module.exports = [{
  method: 'GET',
  path: '/fetch',
  config: {
    description: 'Fetch questions from DB',
    notes: 'Fetches all the questions to be displayed in front end',
    tags: ['api'],
    plugins: {
      'hapi-swagger': fetchSwagger,
    },
  },
  handler: (req, reply) => {
    Models.questions.findAll({ attributes: ['questionid', 'question', 'options'] })
      .then((searchResults) => {
        // non empty DB
        if (searchResults !== undefined) {
          const returnObject = searchResults.map((query) => {
            query.dataValues.options = JSON.parse(query.dataValues.options);
            return query.dataValues;
          });
          reply(returnObject);
        } else {
          reply({ data: '0' }); // database is empty
        }
      });
  },
}];
