const express = require('express')
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const upload = multer();
const app = express();
mongoose.connect('mongodb://localhost/my_db')

const personSchema = mongoose.Schema({
  name: String,
  age: Number,
  nationality: String
});
const Person = mongoose.model('Person', personSchema);
//above code is used to create a model
//this defines the schema for a person and is used to create a Mongoose mode Person

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

app.get('/person', (req, res) => {
  res.render('person');
})

//{ say: 'Hello', to: 'Chris' } this is how the data looks when submitted.

app.listen(8000);