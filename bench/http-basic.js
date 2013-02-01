var server;

exports.listen = function (options, cb) {
  server = require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world!');
  });
  server.listen(0, function () {
    cb(null, server.address().port);
  });
};

exports.close = function () {
  server.close();
};