const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('dynamic', {
    user: {name: 'Chris', age: '29'}
  });
});
//without the user object, the dynamic page would shift to
//a single line of text forwarding to /sign_up.

module.exports = router;