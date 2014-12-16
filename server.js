'use strict';

var Hapi = require('hapi');
var Good = require('good');
var Path = require('path');
var routes = require('./routes');
var server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 3000
});

var azure = (typeof process.env.PORT === 'string' && process.env.PORT.indexOf('pipe') >= 0);

server.views({
  engines: {
    jade: require('jade')
  },
  path: Path.join(__dirname, 'views'),
  compileOptions: {
    pretty: true
  }
});

for (var route in routes) {
  server.route(routes[route]);
}

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      args: [{
        log: '*',
        response: '*'
      }]
    }]
  }
}, function(err) {
  if (err) {
    throw err;
  }

  if (azure || !module.parent) {
    server.start(function () {
      console.log('Server running at: ', server.info.uri);
    });
  }
});

module.exports = server;
