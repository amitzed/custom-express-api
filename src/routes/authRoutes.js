const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
  res.send('A Post Request')
});

module.exports = router;
