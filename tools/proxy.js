import config         from '../settings/environment/index'
import chalk          from 'chalk'
import logger         from '../utils/logger'
import ip             from 'ip'

const argv = require('minimist')(process.argv.slice(2));
const dev = config.envNode === 'development';
const envTunel = config.envTunel;
const ngrok = (dev && envTunel) || argv.tunnel ? require('ngrok') : false;

exports.appConnect = (port) =>{

  const divider = chalk.gray('\n\n----------------------------------------');
  debugger
  if (ngrok) {
    const options = config.ngrok ? config.ngrok : `${config.port}`

    console.log(`\n\n${chalk.bold('Access the URLs:')}${divider}
      Localhost: ${chalk.magenta(`https://localhost:${port}`)}
      LAN ${chalk.magenta(`https://${ip.address()}:${port}`)} `);

    ngrok.connect(options, (error, url) => {
      if(error){
        return logger.error(`${error.msg}`)
      }
      console.log(`${(url ? `      Proxy: ${chalk.magenta(url)}` : '')}${divider}
         \n       ${chalk.white(`Press ${chalk.white('CTRL-C')} para parar`)}\n\n `);
    });
  } else {
    logger.error(`error in connection with tunnel`);
  }
};
