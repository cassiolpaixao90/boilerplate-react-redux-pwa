import setting from '../settings/environment/index'

module.exports = (app, options) => {
  const isDev  = setting.envNode === 'development'
  if (!isDev) {
    const prodMiddlewares = require('./productionMiddlewares');
    prodMiddlewares(app, options);
  } else {
    const webpackConfig = require('../webpack/webpack.config.dev');
    const devMiddlewares = require('./developmentMiddleware');
    devMiddlewares(app, webpackConfig);
  }
  return app;
};
