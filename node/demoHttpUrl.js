const http = require('http');

http.createServer(function (req, res) {//req represents the request from a client as object(http.IncomingMessage object).
  //object has a property called 'url' holds part of the url that comes after domain name
  res.writeHead(200, {'Content-Type': 'text/html'});
  //if response should be html, HTTP header with correct content should be included.
  //200 is the response code, second argument is object with response headers.
  res.write(req.url); // will display '/' if nothing is added after port number
  res.end();
}).listen(8080);