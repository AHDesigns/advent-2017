const fs = require('fs');
const chalk = require('chalk');

const readFile = file => new Promise((resolve) => {
    fs.readFile(file, 'utf8', (err, data) => {
        resolve(data) && data; // eslint-disable-line no-unused-expressions
    });
});

const stringToArray = (numberString, seperator) => numberString
    .split(seperator)
    .map(n => parseInt(n, 10));

const printP = promisedRes => promisedRes
    .then(a => console.log(a))
    .catch(err => console.log(err));

function check([input, expected], meth, ...args) {
    const printableInput = input.length > 10
        ? `${input.slice(0, 10)}...`
        : input;

    console.log(chalk.gray('==========================================='));
    console.time(' ');
    const res = meth(input, ...args);
    console.timeEnd(' ');

    if (res === expected) {
        /* eslint-disable */
        console.log(
            chalk.green(' ✓ '), printableInput, chalk.yellow(' ---> '), expected,
        );
    } else {
        console.log(
            chalk.red(' x '), printableInput, chalk.yellow(' ---> '), expected,
            '\n result was ', res,
        );
        /* eslint-enable */
    }
}
module.exports = {
    stringToArray,
    readFile,
    printP,
    check,
};
