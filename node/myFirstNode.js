const http = require('http'); //this is a module, we store the contents in a variable to call methods on later. 
const dt = require('./myFirstModule'); //module I have made to return date

//.creatServer makes a new server object
http.createServer(function(req, res) { // function executed when someone tries to 
  //access the computer on port 8080
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('The date and time are currently: ' + 
  dt.myDateTime()); // write a response to client
  res.end(); // end the response 
}).listen(8080); // port the server object is listening to

