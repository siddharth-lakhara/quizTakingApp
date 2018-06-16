const server = require('../src/server');
const Models = require('../models');

describe('/login: ', () => {
  test('/login replies 200 response code with correct json data: ', (done) => {
    const postData = {
      url: '/login',
      method: 'POST',
      payload: JSON.stringify({
        userName: 'siddharth',
      }),
    };
    server.inject(postData, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });

  test('verify whether user is created in DB', (done) => {
    Models.users.findAll({ where: { username: 'siddharth' } }).then((results) => {
      expect(results.length).toBe(1);
      done();
    });
  });

  test('new user is not created');
  test('validation: rejects empty username');
  test('validation: rejects username of type other than string');
  test('validation: rejects username longer than 10 characters');
});
