const express = require('express');
const winston = require('winston');

const app = express();

app.get('/', function(req, res, next) {
	winston.info('Request to /');
	res.json('Works!');
});

module.exports = app;