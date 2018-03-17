const ping = require('./ping');
const devQuestions = require('./dev-questions');
const devAnswers = require('./dev-answers');
const devCombine = require('./dev-combine');

module.exports = [].concat(ping, devQuestions, devAnswers, devCombine);
