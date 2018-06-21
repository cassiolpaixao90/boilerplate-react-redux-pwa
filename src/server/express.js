import express from "express"
const server = express()
import path from "path"
import logger from '../../utils/logger'

const isProd = process.env.NODE_ENV === "production"
if (!isProd) {
  const webpack = require("webpack")
  const config = require("../../webpack/webpack.dev")
  const compiler = webpack(config)

  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  )

  const webpackHotMiddlware = require("webpack-hot-middleware")(
    compiler,
    config.devServer
  )

  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddlware)
  logger.success('Middleware mode dev')
}

const expressStaticGzip = require("express-static-gzip")
server.use(
  expressStaticGzip("dist", {
    enableBrotli: true
  })
)

const PORT = process.env.PORT || 8081
server.listen(PORT, () => {
  logger.success(`Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`)
})
