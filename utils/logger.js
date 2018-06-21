/* eslint-disable no-console */
const chalk = require('chalk');
const ip = require('ip');


const divider = chalk.gray('\n-----------------------------------');

const logger = {

  error: err => {
    console.error(chalk.red(err));
  },

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
};

module.exports = logger;
