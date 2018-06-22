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
    const options = {
      proto: 'http',
      addr: port,
      authtoken: '74jcgkSyZ7n6BmeLWpTqS_51d12j5EKBa6gjhboEqTY'
    };
    ngrok.connect(options, (error, url) => {
      if(error){
        return logger.error('error'+ error.msg)
      }
      console.log(`\n${chalk.bold('Acesso a URLs:')}${divider}
      Localhost: ${chalk.magenta(`http://localhost:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
         (url ? `\n    Proxy: ${chalk.magenta(url)}` : '')}${divider}
         ${chalk.white(`Press ${chalk.white('CTRL-C')} para parar`)} `);
    });
  } else {
    logger.error(`error na porta ${port}`);
  }
};
