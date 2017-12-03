var input1 = ["1122", 3];
var input2 = ["91212129", 9];
var input3 = ["1111", 4];
var input4 = ["1234", 0];

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

function check(num) {
        if(captcha(num[0], false)=== num[1]) {
                console.log('true for: ', num[0], ' = ', num[1]);
        } else {
                console.log('failed for: ', num[0], ' result was: ', captcha(num[0]), ' expected: ', num[1]);
        }
}

check(input1);
check(input2);
check(input3);
check(input4);

var val = process.env.VAL || "12"

// console.log(captcha(val));
