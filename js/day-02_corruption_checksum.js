const { check, readFile, stringToArray } = require('./utils');

const part1 = [
    [
        [
            [5, 1, 9, 5],
            [7, 5, 3],
            [2, 4, 6, 8],
        ], 18,
    ],
];

const part2 = [
    [
        [
            [5, 9, 2, 8],
            [9, 4, 7, 3],
            [3, 8, 6, 5],
        ], 9,
    ],
];

const stringMethod = string => string
    .split('\n')
    .map(phrase => (
        phrase
            .split('\t')
            .map(n => parseInt(n, 10))
    ));

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

const captcha = input => (
    input.reduce((total, arr) => (
        total + findDivisibleValue(arr)
    ), 0)
);

part2.forEach(input => check(input, captcha));

readFile('../input/02.txt')
    .then((text) => {
        const input = stringMethod(text);
        check([input, 250], captcha);
        // check([input, 1092], captcha, true);
    });
