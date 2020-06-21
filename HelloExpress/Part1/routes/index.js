const express = require('express');
const app = express();
const things = require('./things.js');
const dynamic = require('./dynamic.js');
const component = require('./components.js');

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/things', (req, res, next) => {
  console.log('A new request received at ' + Date.now());
  /*function call is important as it tells that more processing is required
  for the current request and  is in the next middlewear function/ route handler
  */
  next();
})
//this middle wear is called only when using the /things router
app.get('/first_template', (req, res) => {
  res.render('first_view');
});//pulls our pug file from views and renders as a standard html

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

app.use('/dynamic_view', dynamic);

app.use('/components', component)

app.get('/:id', (req, res) => {
  res.send('The ID that you used was ' + req.params.id);
});
//:id can pull the id that is used at the end of the url string 8080/123 adds 123 to response

app.use('/things', things);
/*tells the app to use the module we have imported
makes the /things route load our things.js routing*/


app.get('*', (req, res) => {
  res.send('Sorry that is not a valid URL');
});
//this can be used as a catch if any errors are made, must be at end

app.listen(8000);

//curl -X POST "http://localhost:3000/hello" with an open server can test post request