// const { default: axios } = require('axios');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, json, colorize, cli, align } = format;

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  undescore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hide: '\x1b[8m',
  fgBlack: '\x1b[30m',
  fgRed: '\x1b[31m',
  fgGreen: '\x1b[32m',
  fgYellow: '\x1b[33m',
  fgBlue: '\x1b[34m',
  fgMagenta: '\x1b[35m',
  fgCyan: '\x1b[36m',
  fgWhite: '\x1b[37m',
  bgBlack: '\x1b[40m',
};

module.exports = createLogger({
  // level: 'info',
  defaultMeta: {
    service: 'login',
  },
  format: combine(
    // cli(),
    // colorize({ all: true }),
    // timestamp(),
    // colorize(),
    // label({ label: 'api' }),
    // json()
    label({ label: 'right meow!' }),
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }),
    // align(),
    printf((info) => {
      // printInfo(nfo);
      return `${colors.fgBlue + info.timestamp + colors.reset} [ ${info.label} ] ${
        info.level === 'error' ? '\x1b[31m' + info.level + '' : info.level
      }: ${info.message}`;
    })
    // json(),
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
