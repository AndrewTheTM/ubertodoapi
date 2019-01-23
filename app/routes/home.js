const express = require('express');

// create router
const router = express.Router();

// GET http://localhost:3001/
router.get('/',(req,res) => {
  res.send('Hello world!');
});

module.exports = router;
