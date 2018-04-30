const fs = require('fs');
const chalk = require('chalk');

const readFile = file => new Promise((resolve) => {
    fs.readFile(file, 'utf8', (err, data) => {
        resolve(data) && data; // eslint-disable-line no-unused-expressions
    });
});

const stringToNumArr = (numberString, seperator) => numberString
    .split(seperator).map(n => parseInt(n, 10));

const printP = promisedRes => promisedRes
    .then(a => console.log(a))
    .catch(err => console.log(err));

function check([input, expected], meth) {
    const printableInput = JSON.stringify(input).slice(0, 25);
    console.log(chalk.gray('==========================================='));

    console.time(' ');
    const res = meth(input);
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

const RUN = (fileNumber, expectedResult, transformationMethod, stringParseMethod = x => x) => {
    readFile(`../input/${fileNumber}.txt`)
        .then((rawStringInput) => {
            const usefulInput = stringParseMethod(rawStringInput);
            check([usefulInput, expectedResult], transformationMethod);
        });
}

const TEST = (array, method) => array.forEach(input => check(input, method));

module.exports = {
    TEST,
    RUN,
    stringToNumArr,
    printP,
    check,
};
