const express = require('express'); // imports express module
const app = express(); //creates the server

app.get('/', (req, res) => {
  res.send('Hello World');
}); //only responds to a HTTP get req and res with hello world

app.listen(8000, () => {
  console.log('Test app listening on port 8000');
});//sets the port that the server is listening for

// when installing dev dependencies use --save-dev so package users dont have 
// to install on production 