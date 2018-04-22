const { check, readFile, stringToArray } = require('./utils');

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

const compareAgainst = (ishalf, i, orig) => {
    const buff = ishalf ? (orig.length / 2) : 1;
    return orig[(i + buff) % orig.length];
};

const captcha = (input, ishalf) => stringToArray(input, '')
    .reduce((acc, cur, i, arr) => (
        cur === (compareAgainst(ishalf, i, arr)) ? acc + cur : acc
    ), 0);

part1.forEach(input => check(input, captcha));
part2.forEach(input => check(input, captcha, true));

readFile('../input/01.txt')
    .then((input) => {
        check([input, 1136], captcha);
        check([input, 1092], captcha, true);
    });
