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

function check([originalInput, expected], meth) {
    const input = originalInput.length > 30
        ? `${originalInput.slice(0, 30)}...`
        : originalInput;

    const res = meth(input);

    if (res === expected) {
        /* eslint-disable */
        console.log(
            chalk.gray('===========================================\n') +
            chalk.green(' ✓ '), input, chalk.yellow(' ---> '), expected,
        );
    } else {
        console.log(
            chalk.gray('===========================================\n') +
            chalk.red(' x '), input, chalk.yellow(' ---> '), expected,
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
