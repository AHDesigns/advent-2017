const { RUN, TEST } = require('./utils');
const { stringToNumArr } = require('./stringTrasformers');
const { d1 } = require('./tests');

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

TEST(d1.part1, methodOne);
TEST(d1.part2, methodTwo);

RUN('01', 1136, methodOne);
RUN('01', 1092, methodTwo);
