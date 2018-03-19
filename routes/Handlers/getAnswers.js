// gets answers from the server

const rp = require('request-promise');

const getAnswers = url => rp(url).then(res => (JSON.parse(res)));

module.exports = getAnswers;
