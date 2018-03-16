const Hapi = require('hapi');
const Routes = require('../routes');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

server.route(Routes);

server.start((err) => {
  if (err) {
    console.log(err);
  }
  console.log('server started at: ', server.info.uri);
});
