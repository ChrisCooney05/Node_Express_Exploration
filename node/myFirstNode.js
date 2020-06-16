const http = require('http'); //this is a module, we store the contents in a variable to call methods on later. 
const dt = require('./myFirstModule'); //module I have made to return date

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('The date and time are currently: ' + 
  dt.myDateTime());
  res.end();
}).listen(8080);

