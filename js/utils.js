var fs = require('fs');
var chalk = require('chalk');

const readFile = (file) => new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err,data) => {
                err ? reject(err) : resolve(data);
        })
});

const printP = (promisedRes) => promisedRes
        .then(a => console.log(a))
        .catch(err => console.log(err));

function check([input, expected], meth) {
        const res = meth(input);

        if(res == expected) {
                console.log(
                        chalk.gray('===========================================\n') +
                        chalk.green(' ✓ '), input, chalk.yellow(' ---> '), expected
                );
        } else {
                console.log(
                        chalk.gray('===========================================\n') +
                        chalk.red(' x '), input, chalk.yellow(' ---> '), expected,
                        '\n result was ', res
                );
        }
}
module.exports = {
        readFile,
        printP,
        check
};
