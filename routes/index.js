const ping = require('./ping');
const devQuestions = require('./dev-questions');
const devAnswers = require('./dev-answers');

module.exports = [].concat(ping, devQuestions, devAnswers);
