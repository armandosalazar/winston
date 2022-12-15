// const { default: axios } = require('axios');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, json, colorize, cli } = format;

module.exports = createLogger({
  format: combine(
    // cli(),
    // colorize({ all: true }),
    // timestamp(),
    // colorize(),
    // label({ label: 'api' }),
    // json()
    label({ label: 'right meow!' }),
    timestamp(),
    printf(nfo => {
      // printInfo(nfo);
      return `${nfo.timestamp} [${nfo.label}] ${nfo.level}: ${nfo.message}`;
    }),
  ),
  transports: [
    new transports.Console(),
    // new transports.File({
    //   filename: 'logs/app.log',
    // }),
    new transports.Http({
      host: 'localhost',
      port: 3000,
      path: '/logs',
    }),
  ],
});


// function printInfo(nfo) {
//   console.log(typeof nfo);
//   axios.post('http://localhost:3000/logs', nfo);
// }