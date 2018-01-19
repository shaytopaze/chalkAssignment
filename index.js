var chalk = require("chalk");

var message = chalk.bgBlue.magenta.underline("Hello ") + chalk.bgRed("World");
console.log(message);

var magentaWords = chalk.magenta("HEY IM MAGENTA!");
console.log(magentaWords);