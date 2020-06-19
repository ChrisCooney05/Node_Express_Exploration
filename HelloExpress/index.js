const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.post('/hello', (req, res) => {
  res.send('You just made a Post request to /hello!');
});

app.listen(8080);

//curl -X POST "http://localhost:3000/hello" with an open server can test post request