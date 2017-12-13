var fs = require('fs');

const readFile = (file) => {
        return new Promise((resolve, reject) => {
                fs.readFile(file, 'utf8', (err,data) => {
                        err ? reject(err) : resolve(data);
                })
        })
};

const printP = (promisedRes) => promisedRes.then(a => console.log(a)).catch(err => console.log(err));

module.exports = {
        readFile,
        printP
};
