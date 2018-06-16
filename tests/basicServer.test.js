const server = require('../src/server');

describe('Basic server functionality tests', () => {
  test('/ping path is working', (done) => {
    server.inject('/ping', (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });

  test('/ping path replies pong', (done) => {
    server.inject('/ping', (res) => {
      expect(res.payload).toEqual('pong');
      done();
    });
  });
});
