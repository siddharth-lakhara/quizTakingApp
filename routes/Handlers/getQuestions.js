// gets questions from the server

const axios = require('axios');

const getQuestions = url => axios(url).then(res => (res.data));

module.exports = getQuestions;
