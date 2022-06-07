import chalk from "chalk";

class Loggers {
  Info(msg) {
    console.log(chalk.blue(msg));
  }

  Error(msg) {
    console.log(chalk.red(msg));
  }

  Warn(msg) {
    console.log(chalk.red(msg));
  }
}

export const TransfersLoggers = Object.freeze(new Loggers());
