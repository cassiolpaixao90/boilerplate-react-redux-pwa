import express                      from 'express'
import expressStaticGzip            from 'express-static-gzip'
import webpack                      from 'webpack'
import webpackHotServerMiddleware   from 'webpack-hot-server-middleware'
import configDevClient              from '../webpack/webpack.dev-client.js'
import configDevServer              from '../webpack/webpack.dev-server.js'
import configProdClient             from '../webpack/webpack.prod-client.js'
import configProdServer             from '../webpack/webpack.prod-server.js'
import { appConnect }               from './proxy'
import config                       from '../settings/environment/index'

const server  = express()
const isDev   = config.envNode === 'development'
const port    = config.server.port
let isBuilt   = false

const done = () => {
  !isBuilt && server.listen(port, () => {
      isBuilt = true
      if (isDev) appConnect(`${port}`)
      else console.log( `Server listening on ${config.envNode}`)
    })
}

if (isDev) {
  const compiler              = webpack([configDevClient, configDevServer])
  const clientCompiler        = compiler.compilers[0]
  const webpackDevMiddleware  = require('webpack-dev-middleware')(
    compiler,
    configDevClient.devServer
  )
  const webpackHotMiddlware   = require('webpack-hot-middleware')(
    clientCompiler,
    configDevClient.devServer
  )
  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddlware)
  server.use(webpackHotServerMiddleware(compiler))
  done()
} else {
  webpack([configProdClient, configProdServer]).run((err, stats) => {
    const clientStats   = stats.toJson().children[0]
    const render        = require('../build/prod-server-bundle.js').default
    console.log( stats.toString({ colors: true }))
    server.use( expressStaticGzip('dist', { enableBrotli: true }))
    server.use(render({ clientStats }))
    done()
  })
}


