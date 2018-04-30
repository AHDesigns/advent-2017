const { RUN, TEST, stringToNumArr } = require('./utils');

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

const sortAndFindDifference = ([...arr]) => {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] - arr[0];
};

const sumList = (input, meth) => {
    // const arr = stringMethod(input);
    return input.reduce((total, arr) => (
        total + meth(arr)
    ), 0)
};

const methodWrapper = methodNumber => [
    sumList,
    methodNumber === 1 ? findDifference : findDivisibleValue
];
/* --------------------------------------------- */
/* RUN
/* --------------------------------------------- */

TEST(part1, methodWrapper(1));
TEST(part2, methodWrapper(2));

RUN('02', 47136, methodWrapper(1), stringMethod);
RUN('02', 250, methodWrapper(2), stringMethod);
