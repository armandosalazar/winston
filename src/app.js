const express = require('express');
const morgan = require('morgan');
// const winston = require('winston');
const logger = require('./utils/logger');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', function (req, res, next) {
  // winston.info('Request to /');
  logger.info('request to /', {
    meta: {
      id: 1,
    },
  });
  // logger.warn('War');
  // logger.error('Error');
	try {
		throw new Error('Ha ocurrido un error');
	} catch (error) {
		logger.error(error.message);
		// console.log(error);
	}
  res.json('Works!');
});

app.post('/logs', function (req, res, next) {
  console.log(req.body);
  res.send('OK');
});

module.exports = app;
