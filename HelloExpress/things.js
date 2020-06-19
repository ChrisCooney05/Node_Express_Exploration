const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('GET route on things.');
});

router.post('/', (req, res) => {
  res.send('Post route on things.');
});

router.get('/:name/:id', (req, res) => {
  res.send('Your ID is ' + req.params.id + ' and your name is ' + req.params.name);
});
//we can add multiple : if we would like

router.get('/things/:id([0-9]{5})', (req, res) => {
  res.send('ID: ' + req.params.id);
});
//regex can be used to limit or specify url requirements. so ID must be 5 long only numbers

//export this to use in index.js
module.exports = router;
