import express            from 'express'
import settings           from '../settings/environment/index'
import webpack            from 'webpack'
import expressStaticGzip  from 'express-static-gzip'

const server = express()
const config = require('../webpack/webpack.config.dev.js')
const compiler = webpack(config)
const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
)
const webpackHotMiddlware = require('webpack-hot-middleware')(
  compiler,
  config.devServer
)

server.use(webpackDevMiddleware)
server.use(webpackHotMiddlware)
server.use( expressStaticGzip('build', { enableBrotli: true }) )

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`
  )
})
