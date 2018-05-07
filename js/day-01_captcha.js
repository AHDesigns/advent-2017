const { READ, RUN } = require('./utils/utils');
const { stringToNumArr } = require('./utils/stringTrasformers');
const { d1: { part1, part2 } } = require('./utils/tests');

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
    RUN(expected, methodOne)(input);
});

part2.forEach(([input, expected]) => {
    RUN(expected, methodTwo)(input);
});

READ('01')(
    RUN(1136, methodOne),
    RUN(1092, methodTwo),
);
