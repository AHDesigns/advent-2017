const { READ, RUN } = require('./utils');
const { stringTo2dNumArr } = require('./stringTrasformers');
const { d2 } = require('./tests');

const valInArr = (val, [head, ...tail]) => {
    if (!head) return undefined;

    const modulus = val > head ? val % head : head % val;
    if (modulus === 0 && val !== head) {
        return val > head ? val / head : head / val;
    }

    return valInArr(val, tail);
};

const findDivisibleValue = ([head, ...tail]) =>
    valInArr(head, tail) || findDivisibleValue(tail);

const sortAndFindDifference = ([...arr]) => {
    arr.sort((a, b) => a - b);
    return arr[ arr.length - 1 ] - arr[ 0 ];
};

const methodOne = input => input.reduce((total, arr) => (
    total + sortAndFindDifference(arr)
), 0);

const methodTwo = input => input.reduce((total, arr) => (
    total + findDivisibleValue(arr)
), 0);


/* --------------------------------------------- */
/* READ
/* --------------------------------------------- */

RUN(d2.part1, methodOne);
RUN(d2.part2, methodTwo);

READ('02', 47136, methodOne, stringTo2dNumArr('\t'));
READ('02', 250, methodTwo, stringTo2dNumArr('\t'));
