import logger from '../utils/logger'
import config from '../settings/environment/index'
import { appConnect } from './tunnel'

exports.setupMiddleware = (app, port)  => {
  const dev = config.env === 'development';
  if (dev) {
    const webpack = require("webpack")
    const config = require("../webpack/webpack.dev")
    const compiler = webpack(config)

    const webpackDevMiddleware = require("webpack-dev-middleware")(
      compiler,
      config.devServer
    )

    const webpackHotMiddlware = require("webpack-hot-middleware")(
      compiler,
      config.devServer
    )
    app.use(webpackDevMiddleware)
    app.use(webpackHotMiddlware)
    appConnect(port)
    logger.success('Started app in dev mode...')
  }else{
    logger.success('Started app in prod mode...')
  }
  const expressStaticGzip = require("express-static-gzip")
  app.use(expressStaticGzip("dist", { enableBrotli: true }))
  return app;
};
