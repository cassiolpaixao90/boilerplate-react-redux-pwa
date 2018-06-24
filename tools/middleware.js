
import config                         from '../settings/environment/index'
import expressStaticGzip              from "express-static-gzip"
import webpack                        from "webpack"
import webpackHotServerMiddleware     from "webpack-hot-server-middleware"
import configDevClient                from "../webpack/webpack.dev-client.js"
import configDevServer                from "../webpack/webpack.dev-server.js"
import configProdClient               from "../webpack/webpack.prod-client.js"
import configProdServer               from "../webpack/webpack.prod-server.js"


const devMiddleware = server =>{
  const compiler = webpack([configDevClient, configDevServer])
  const clientCompiler = compiler.compilers[0]
  const serverCompiler = compiler.compilers[1]

  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    configDevClient.devServer
  )

  const webpackHotMiddlware = require("webpack-hot-middleware")(
    clientCompiler,
    configDevClient.devServer
  )

  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddlware)
  server.use(webpackHotServerMiddleware(compiler))
};

const prodMiddleware = (server) =>{
  webpack([configProdClient, configProdServer]).run((err, stats) => {
    const clientStats = stats.toJson().children[0]
    const render = require("../build/prod-server-bundle.js").default
    console.log(stats.toString({ colors: true }))
    server.use( expressStaticGzip("dist", { enableBrotli: true }))
    server.use(render({ clientStats }))
  })
}

const setupMiddleware = server => {
  const dev = config.env === 'development';
  if(dev) devMiddleware(server)
  else prodMiddleware(server)
};

module.exports = setupMiddleware
