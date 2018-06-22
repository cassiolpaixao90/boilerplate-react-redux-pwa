"use strict";

import express from 'express';
import config from "../settings/environment/index";
import logger from '../utils/logger';
import { appConnect } from './tunnel'
import { setupMiddleware } from './middleware'

const app = express();
const port = config.server.port;
setupMiddleware(app);
if(config.env === 'development') appConnect(port)

app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.success(`app started in mode ${config.env}`)
});

export default app;


