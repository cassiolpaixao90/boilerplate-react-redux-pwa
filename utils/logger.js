/* eslint-disable no-console */
const chalk = require('chalk');

const logger = {

  error: msg => {
    console.error(chalk.red(msg));
  },
  info: msg => {
    console.info(chalk.yellow(msg));
  },
  success: msg =>{
    console.log(chalk.green(`${msg} ${chalk.green('✓')}`));
  }

};

module.exports = logger;
