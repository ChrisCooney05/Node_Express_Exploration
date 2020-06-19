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

app.use('/things', things);
/*tells the app to use the module we have imported
makes the /things route load our things.js routing*/

app.listen(8000);

//curl -X POST "http://localhost:3000/hello" with an open server can test post request