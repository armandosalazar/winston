const express = require('express');
// const winston = require('winston');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());

app.get('/', function(req, res, next) {
	// winston.info('Request to /');
	logger.info('Request to /');
	logger.warn('War');
	logger.error('Error');
	res.json('Works!');
});

app.post('/logs', function(req, res, next) {
	console.log('>>>', req.body);
	res.send('OK');
});

module.exports = app;