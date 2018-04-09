const { check } = require('./utils');

const part1 = [
        ["1122", 3],
        ["91212129", 9],
        ["1111", 4],
        ["1234", 0],
];

const part2 = [
        ["1212", 6],
        ["1221", 0],
        ["123425", 4],
        ["123123", 12]
];

function captcha(numberString, ishalf) {
        const arrOfNums = stringToArray(numberString);
        const doubleCheck = arrOfNums.concat(arrOfNums);
        const halfLifeMinusOne = ishalf ? (arrOfNums.length / 2) - 1 : 0;

        return [0].concat(arrOfNums).reduce((acc, curr, i) => {
                return curr === doubleCheck[i+halfLifeMinusOne] ? acc + curr : acc;
        })
}

function stringToArray(numberString) {
        const numsAsArray = numberString.split('');
        const numsAsNums = numsAsArray.map(n => parseInt(n));
        return numsAsNums;
}

part1.forEach(input => check(input, captcha));
part2.forEach(input => check(input, captcha));
