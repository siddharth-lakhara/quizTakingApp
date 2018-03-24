const ping = require('./ping');
const devQuestions = require('./dev-questions');
const devAnswers = require('./dev-answers');
const devCombine = require('./dev-combine');
const updateDB = require('./updateDB');

const login = require('./login');
const fetch = require('./fetch');
const responses = require('./responses');
const calc = require('./calc');
const leaders = require('./leaders');

module.exports = [].concat(
  ping, devQuestions, devAnswers,
  devCombine, updateDB, login, fetch,
  responses, calc, leaders,
);
