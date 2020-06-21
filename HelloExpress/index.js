const express = require('express')
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();

app.get('/', (req, res) => {
  res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

//for parsing application/json
app.use(bodyParser.json());

//for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true}));
//form-urlencoded

//for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('received your request!')
});

//{ say: 'Hello', to: 'Chris' } this is how the data looks when submitted.

app.listen(8000);