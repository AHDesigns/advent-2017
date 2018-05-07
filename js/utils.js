const fs = require('fs');
const chalk = require('chalk');

const line = '-------------------------------------------';

const RUN = (expected, meth) => (input) => {
    const printableInput = JSON.stringify(input).slice(0, 25);
    console.log(chalk.gray(line));

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
    console.log(chalk.gray(line));
};

const readFile = f => new Promise((res, rej) => {
    fs.readFile(f, 'utf8', (err, data) => {
        if (err) rej(new Error(err));
        else { res(data); }
    });
});

const READ = (fileNumber, stringParseMethod = x => x) => async (...funcs) => {
    try {
        const data = await readFile(`../input/${fileNumber}.txt`);
        const input = stringParseMethod(data);
        funcs.forEach((func) => { func(input); });
    } catch (e) {
        console.log(
            chalk.red(line),
            '\n', e, '\n',
            chalk.red(line),
        );
    }
};

module.exports = {
    READ,
    RUN,
};
