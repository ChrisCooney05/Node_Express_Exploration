const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const q = url.parse(req.url, true).query;
  console.log(req.url) //req.url holds everything the client has added to the query string
  const txt = q.year + " " + q.month;// we can pull the values out by like we can a class object.
  res.end(txt);
}).listen(8080);

/*http://localhost:8080/?year=2017&month=July
using this url will produce the following result
2017 July
*/