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

const captcha = input => (
    input.reduce((total, arr) => (
        total + arr.reduce((acc, cur) => {
            if (typeof acc !== 'object') return acc;

            for (const val of acc) {
                const modulus = val > cur ? val % cur : cur % val;
                if (modulus === 0 && val !== cur) {
                    return val > cur ? val / cur : cur / val;
                }
            }
            return acc.slice(1);
        }, arr)
    ), 0)
);

part2.forEach(input => check(input, captcha));

readFile('../input/02.txt')
    .then((text) => {
        const input = stringMethod(text);
        check([input, 250], captcha);
        // check([input, 1092], captcha, true);
    });
