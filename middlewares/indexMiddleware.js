/* eslint-disable global-require */

import setting from '../settings/environment/index'

module.exports = (app, options) => {

  const isDev  = setting.envNode === 'development'

  if (!isDev) {
    const addProdMiddlewares = require('./productionMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../webpack/webpack.config.dev');
    const addDevMiddlewares = require('./developmentMiddleware');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
