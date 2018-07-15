import express      from 'express'
import setting      from '../settings/environment/index'
import setup        from '../middlewares/indexMiddleware'
import path         from 'path'
import logger       from '../tools/logger'

const isDev         = setting.envNode === 'development';
const ngrok         = (isDev && setting.envTunel) ? require('ngrok') : false;
const { resolve }   = path;
const app           = express();

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

const port = setting.server.port
const host = setting.server.host


app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }
  if (ngrok) {
    let url;
    try {
      const options = setting.ngrok;
      url = await ngrok.connect(options);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, host, url);
  } else {
    logger.appStarted(port, host);
  }
});
