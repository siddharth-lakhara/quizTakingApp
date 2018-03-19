const ping = require('./ping');
const devQuestions = require('./dev-questions');
const devAnswers = require('./dev-answers');
const devCombine = require('./dev-combine');
const updateDB = require('./updateDB');

const login = require('./login');
const fetch = require('./fetch');

module.exports = [].concat(
  ping, devQuestions, devAnswers,
  devCombine, updateDB, login, fetch,
);
