"use strict";

import express from 'express';
import config from "../settings/environment/index";
import logger from '../utils/logger';
import { setupMiddleware } from './middleware'

const app = express();
const port = normalizePort(config.server.port);
const ip = config.server.ip;

setupMiddleware(app, port);

app.listen(port);
app.on('error', onError);
app.on('listening', onListening);

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
    logger.error(error);
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCESS':
      logger.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      logger.error(error);
  }
}

function onListening() {
  const addr = app.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
}

export default app;


