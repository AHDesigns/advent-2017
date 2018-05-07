const { READ, RUN } = require('./utils');
const { stringToNumArr } = require('./stringTrasformers');
const { d1: { part1, part2 } } = require('./tests');

const methodOne = input => stringToNumArr(input, '')
    .reduce((acc, cur, i, arr) => (
        cur === arr[ (i + 1) % arr.length ]
            ? acc + cur
            : acc
    ), 0);

const methodTwo = input => stringToNumArr(input, '')
    .reduce((acc, cur, i, arr) => (
        cur === arr[ (i + (arr.length / 2)) % arr.length ]
            ? acc + cur
            : acc
    ), 0);

/* --------------------------------------------- */
/* RUN
/* --------------------------------------------- */

part1.forEach(([input, expected]) => {
    RUN(input, expected, methodOne);
});

part2.forEach(([input, expected]) => {
    RUN(input, expected, methodTwo);
});

READ('01').then((input) => {
    RUN(input, 1136, methodOne);
    RUN(input, 1092, methodTwo);
}).catch(() => {});
