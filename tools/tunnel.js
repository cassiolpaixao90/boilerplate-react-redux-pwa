import config from '../settings/environment/index'
const chalk = require('chalk');
import logger from '../utils/logger'
const ip = require('ip');
const argv = require('minimist')(process.argv.slice(2));
const dev = config.env === 'development';
const envTunel = config.envTunel;
const ngrok = (dev && envTunel) || argv.tunnel ? require('ngrok') : false;

exports.appConnect = (port) =>{

  const divider = chalk.gray('\n\n----------------------------------------');

  if (ngrok) {
    ngrok.connect(port, (innerErr, tunnelStarted) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

    console.log(`\n${chalk.bold('Acesso a URLs:')}${divider}
    Localhost: ${chalk.magenta(`http://localhost:${port}`)}
    LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
       (tunnelStarted ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}` : '')}${divider}
       ${chalk.white(`Press ${chalk.white('CTRL-C')} para parar`)} `);

    });
  } else {
    logger.error(`error na porta${port}`);
  }
};
