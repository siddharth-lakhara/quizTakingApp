// gets answers from the server

const axios = require('axios');

const getAnswers = url => axios(url).then(res => (res.data));

module.exports = getAnswers;
