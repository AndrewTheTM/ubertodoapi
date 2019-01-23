// Dependencies
const express = require('express');

// configs
const port = process.env.PORT ||  3001;

// ExpressJs Setup
const app = express();


// Starting up the server
app.listen(port,  function() {
  console.log(`Express server listening on port ${port}`);
});

module.exports = app;

const routes = require('./routes');
app.use(routes);
