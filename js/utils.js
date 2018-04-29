const fs = require('fs');
const chalk = require('chalk');

const readFile = file => new Promise((resolve) => {
    fs.readFile(file, 'utf8', (err, data) => {
        resolve(data) && data; // eslint-disable-line no-unused-expressions
    });
});

const stringToArray = (numberString, seperator) => numberString
    .split(seperator).map(n => parseInt(n, 10));

const printP = promisedRes => promisedRes
    .then(a => console.log(a))
    .catch(err => console.log(err));

function check([input, expected], meth, ...args) {
    const printableInput = JSON.stringify(input).slice(0, 30);

    console.log(chalk.gray('==========================================='));

    console.log(input.length);
    console.time(' ');
    // let timeTaken = new Date();
    const res = meth(input, ...args);
    // timeTaken = new Date() - timeTaken;
    // console.log(timeTaken);
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
