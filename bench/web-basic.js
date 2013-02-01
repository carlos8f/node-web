var server;

exports.listen = function (options, cb) {
  var handler = require('../').socketHandler(function (req, res) {
    res(200, {'Content-Type': 'text/plain'}, 'hello world!');
  });
  server = require('net').createServer(handler);
  server.listen(0, function () {
    cb(null, server.address().port);
  });
};

exports.close = function () {
  server.close();
};