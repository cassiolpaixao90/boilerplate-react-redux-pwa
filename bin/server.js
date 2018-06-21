/* eslint-disable import/default */
import http from "../tools/app";
import config from "../settings/environment/index";
import open from 'open';
import logger from '../utils/logger';

const argv = require('minimist')(process.argv.slice(2));
const setup = require('../tools/middleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const port = normalizePort(config.server.port);
const ip = config.server.ip;

setup(http, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

http.listen(port);
http.on('error', onError);
http.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    return logger.error(error.message);
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCESS':
      logger.error(bind + 'requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      logger.error(error.message);
  }
}

function onListening() {
  const addr = http.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

    if (ngrok) {
      ngrok.connect(addr.port, (innerErr, url) => {
        if (innerErr) {
          return logger.error(innerErr);
        }
        logger.appStarted(port, url);
      });
    } else {
      logger.appStarted(port);
    }

  // open(`${ip}${port}`);
}

