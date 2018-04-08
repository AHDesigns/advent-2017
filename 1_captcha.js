const { check } = require('./utils');

const inputs = [
        ["1122", 3],
        ["91212129", 9],
        ["1111", 4],
        ["1234", 0],
];

// var input1 = ["1212", 6];
// var input2 = ["1221", 0];
// var input3 = ["123425", 4];
// var input4 = ["123123", 12];

function captcha(numberString, ishalf) {
        var arrOfNums = stringToArray(numberString);
        var doubleCheck = arrOfNums.concat(arrOfNums);
        var halfLifeMinusOne = ishalf ? (arrOfNums.length / 2) - 1 : 0;

        return [0].concat(arrOfNums).reduce((acc, curr, i) => {
                return curr === doubleCheck[i+halfLifeMinusOne] ? acc + curr : acc;
        })
}

function stringToArray(numberString) {
        var numsAsArray = numberString.split('');
        var numsAsNums = numsAsArray.map(n => parseInt(n));
        return numsAsNums;
}

inputs.forEach(input => check(input, captcha));
