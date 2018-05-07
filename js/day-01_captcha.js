const { READ, RUN } = require('./utils');
const { stringToNumArr } = require('./stringTrasformers');
const { d1: { part1, part2 } } = require('./tests');

const inputFile = READ();

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
    console.log('run');
    RUN(Promise.resolve(input), expected, methodOne);
});

part2.forEach(([input, expected]) => {
    console.log('run2');
    RUN(Promise.resolve(input), expected, methodTwo);
});

RUN(inputFile('01'), 1136, methodOne);
RUN(inputFile('01'), 1092, methodTwo);
