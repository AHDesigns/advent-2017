const { RUN, TEST, stringToNumArr } = require('./utils');

/* --------------------------------------------- */
/* TEST INPUTS
/* --------------------------------------------- */

const part1 = [
    ['1122', 3],
    ['91212129', 9],
    ['1111', 4],
    ['1234', 0],
];

const part2 = [
    ['1212', 6],
    ['1221', 0],
    ['123425', 4],
    ['123123', 12],
];

/* --------------------------------------------- */
/* METHODS
/* --------------------------------------------- */

const methodOne = (input) => stringToNumArr(input, '')
    .reduce((acc, cur, i, arr) => (
        cur === arr[ (i + 1) % arr.length ]
        ? acc + cur
        : acc
    ), 0);

const methodTwo = (input) => stringToNumArr(input, '')
    .reduce((acc, cur, i, arr) => (
        cur === arr[ (i + arr.length / 2) % arr.length ]
        ? acc + cur
        : acc
    ), 0);

/* --------------------------------------------- */
/* RUN
/* --------------------------------------------- */

TEST(part1, methodOne);
TEST(part2, methodTwo);

RUN('01', 1136, methodOne);
RUN('01', 1092, methodTwo);
