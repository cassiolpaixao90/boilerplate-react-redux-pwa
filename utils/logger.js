import chalk      from 'chalk'

const logger = {
  error: msg => {
    console.log(chalk.red(msg));
  },
  info: msg => {
    console.log(chalk.yellow(msg));
  },
  success: msg =>{
    console.log(chalk.green(`${msg} ${chalk.green('✓')}`));
  }

};

module.exports = logger;
