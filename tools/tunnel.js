/* eslint-disable no-console */
const chalk = require('chalk');
const ip = require('ip');
const argv = require('minimist')(process.argv.slice(2));
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;


const divider = chalk.gray('\n-----------------------------------');

const tunnel = {

  appStarted: (port, tunnelStarted) => {
    console.log(`Servidor iniciado ${chalk.green('✓')}`);

    if (tunnelStarted) {
      console.log(`Tunnel inicializado ${chalk.green('✓')}`);
    }

    console.log(`${chalk.bold('Acesso a URLs:')}${divider}
      Localhost: ${chalk.magenta(`http://localhost:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
           (tunnelStarted ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}` : '')}${divider}
           ${chalk.blue(`Press ${chalk.italic('CTRL-C')} para parar`)} `);
  },
  connect: (port) =>{
    if (ngrok) {
      ngrok.connect(port, (innerErr, url) => {
        if (innerErr) {
          return logger.error(innerErr);
        }
        this.appStarted(port, url);
      });
    } else {
      logger.appStarted(port);
    }
  }
};

module.exports = tunnel;
