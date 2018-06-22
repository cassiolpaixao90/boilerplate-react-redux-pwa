
import config from '../settings/environment/index'

exports.setupMiddleware = (app) => {
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


  }
  const expressStaticGzip = require("express-static-gzip")
  app.use(expressStaticGzip("dist", { enableBrotli: true }))
  return app;
};
