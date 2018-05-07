const fs = require('fs');
const chalk = require('chalk');

const RUN = async (inputP, expected, meth) => {
    const line = '-------------------------------------------';
    try {
        const input = await inputP;

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
    } catch (e) {
        console.log(
            chalk.red(line),
            '\n', e, '\n',
            chalk.red(line),
        );
    }
};

const READ = () => {
    const cache = {};
    return (fileNumber, stringParseMethod = x => x) => new Promise((res, rej) => {
        console.log(fileNumber);
        console.log(cache);
        if (fileNumber in cache) {
            res(cache[ fileNumber ]);
        }

        console.log('did not hit cache');
        fs.readFile(`../input/${fileNumber}.txt`, 'utf8', (err, data) => {
            if (err) rej(new Error(err));
            const parsedData = stringParseMethod(data);
            cache[ fileNumber ] = parsedData;

            console.log('returning');
            res(parsedData);
        });
    });
};

module.exports = {
    READ,
    RUN,
};
