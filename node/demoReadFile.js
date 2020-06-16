const http = require('http');
const fs = require('fs') // stands for file system we can do the following with it
/*
Read files
Create files
Update files
Delete files
Rename files
*/

http.createServer(function (req, res) {
  fs.readFile('demoHtml1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);// returns the data stored on the html file that has been read
    return res.end();
  });
}).listen(8080);

