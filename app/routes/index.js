const express = require('express');
const router = express.Router();

const homeRoute = require('./home');
const todosRoute = require('./todos.js');

router.use('/', homeRoute);
router.use('/todos', todosRoute);

module.exports = router;
