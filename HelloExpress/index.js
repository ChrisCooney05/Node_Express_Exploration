const express = require('express');
const app = express();
const things = require('./things.js')

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.post('/hello', (req, res) => {
  res.send('You just made a Post request to /hello!');
});

app.all('/test', (req, res) => {
  res.send('HTTP method has no effect on this route');
});
//can take all forms of request

app.get('/:id', (req, res) => {
  res.send('The ID that you used was ' + req.params.id);
});
//:id can pull the id that is used at the end of the url string 8080/123 adds 123 to response
app.use('/things', things);
/*tells the app to use the module we have imported
makes the /things route load our things.js routing*/

app.get('/things/:name/:id', (req, res) => {
  res.send('Your ID is ' + req.params.id + ' and your name is ' + req.params.name);
});

app.listen(8000);

//curl -X POST "http://localhost:3000/hello" with an open server can test post request