import config         from '../settings/environment/index'
import chalk          from 'chalk'
import logger         from '../utils/logger'

const argv = require('minimist')(process.argv.slice(2));
const dev = config.envNode === 'development';
const envTunel = config.envTunel;
const ngrok = (dev && envTunel) || argv.tunnel ? require('ngrok') : false;

const divider = chalk.gray('\n\n----------------------------------------');
if (ngrok) {
  const options = config.ngrok ? config.ngrok : `${config.port}`
  ngrok.connect(options, (error, url) => {
    if(error){
      return logger.error(`${error.msg}`)
    }
    console.log(`${(url ? `      External: ${chalk.magenta(url)}` : '')}${divider}
       \n       ${chalk.white(`Press ${chalk.white('CTRL-C')} for stop`)}\n\n `);
  });
} else {
  logger.error(`It occurred a error in connection with tunnel`);
}

