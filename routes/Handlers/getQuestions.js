// gets questions from the server

const rp = require('request-promise');

const getQuestions = url => rp(url).then(res => (JSON.parse(res)));

module.exports = getQuestions;
