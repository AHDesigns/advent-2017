const fs = require('fs');
const chalk = require('chalk');

const readFile = f => new Promise((res, rej) => {
    fs.readFile(f, 'utf8', (err, data) => {
        if (err) rej(new Error(err));
        else { res(data); }
    });
});

const line = '-------------------------------------------';

const RUN = (expected, meth) => (input) => {
    const printableInput = JSON.stringify(input).slice(0, 25);

    console.log(chalk.gray(line));

    console.time(' ');
    const res = meth(input);
    console.log(res);
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

const DEBUG = {
    log(v) {
        console.log('DEBUG: ', v);
        return v;
    },
    logId(id) {
        return (v) => {
            console.log('DEBUG: ', v[ id ]);
            return v;
        };
    },
    logFromEnd(num) {
        return (v) => {
            console.log('DEBUG: ', v[ v.length - (1 + num) ]);
            return v;
        };
    },
    write(name) {
        return (v) => {
            const uid = () => Math.random().toString(34).slice(2);
            const id = name || uid();
            fs.writeFile(`./test-${id}`, v, (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log('The file was saved!');
                return 0;
            });
            return v;
        };
    },
    custom(customFunc) {
        return (v) => {
            customFunc(v);
            return v;
        };
    },
};

module.exports = {
    READ,
    RUN,
    DEBUG,
};
