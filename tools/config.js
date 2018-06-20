const resolve = require('path').resolve;
const pullAll = require('lodash/pullAll');
const uniq = require('lodash/uniq');

const ReactBoilerplatePWA = {
  
  version: '1.0.0',

  /**
   *
   * O Plugin DLL fornece um aumento muito bom de velocidade para a criação de webpack e atualização de módulo hotloading
   * armazenando em cache os metadados do módulo para todas as nossas dependências npm. Por padrão está habilitado
   * em desenvolvimento.
   *
   *
   * Para disabilitar o DLL Plugin, set o valor para false
   */
  dllPlugin: {
      
    defaults: {

      exclude: [
        'chalk',
        'compression',
        'cross-env',
        'express',
        'ip',
        'minimist',
        'sanitize.css',
      ],

      include: ['core-js', 'eventsource-polyfill', 'babel-polyfill', 'lodash'],
      path: resolve('../node_modules/react-boilerplate-pwa-dlls'),
    },

    entry(pkg) {
      const dependencyNames = Object.keys(pkg.dependencies);
      const exclude = pkg.dllPlugin.exclude || ReactBoilerplatePWA.dllPlugin.defaults.exclude;
      const include = pkg.dllPlugin.include || ReactBoilerplatePWA.dllPlugin.defaults.include;
      const includeDependencies = uniq(dependencyNames.concat(include));

      return {
        ReactBoilerplatePWADeps: pullAll(includeDependencies, exclude),
      };
    },
  },
};

module.exports = ReactBoilerplatePWA;
