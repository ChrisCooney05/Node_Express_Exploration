const http = require('http'); //this is a module, we store the contents in a variable to call methods on later. 

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

