const { check, readFile, stringToArray } = require('./utils');

const part1 = [
    [
        [
            [5, 1, 9, 5],
            [7, 5, 3],
            [2, 4, 6, 8],
        ],
        18,
    ],
];

const part2 = [
    [
        [
            [5, 9, 2, 8],
            [9, 4, 7, 3],
            [3, 8, 6, 5],
        ],
        9,
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

const findDifference = ([head, ...tail], values = { largest: head, smallest: head }) => {
    if (!head) return values.largest - values.smallest;

    if (head > values.largest) return findDifference(tail, { ...values, largest: head });
    if (head < values.smallest) return findDifference(tail, { ...values, smallest: head });

    return findDifference(tail, values);
};

const sumList = (input, meth) => (
    input.reduce((total, arr) => (
        total + meth(arr)
    ), 0)
);


part1.forEach(input => check(input, sumList, findDifference));
part2.forEach(input => check(input, sumList, findDivisibleValue));

readFile('../input/02.txt')
    .then((text) => {
        const input = stringMethod(text);
        check([input, 250], sumList, findDivisibleValue);
        check([input, 47136], sumList, findDifference);
    });
