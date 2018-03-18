const Hapi = require('hapi');
const Routes = require('../routes');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');

const swaggerOptions = {
  info: {
    title: 'API documentations for quizzy',
    version: '1.0',
  },
};

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

server.register([
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: swaggerOptions,
  }], (err) => {
  if (err) {
    console.log(err);
  }
});

server.route(Routes);

if (!module.parent) {
  server.start((err) => {
    if (err) {
      console.log(err);
    }
    console.log('server started at: ', server.info.uri);
  });
}

module.exports = server;
