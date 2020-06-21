const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('dynamic', {
    name: 'TutorialsPoint',
    url: "http://www.tutorialspoint.com"
  });
});

module.exports = router;