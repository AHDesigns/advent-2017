const R = require('ramda');
const { readFile, printP } = require('./utils/utils');

const Iarr = [0, 3, 0, 1, -3];

const string2IntArr = string => string.split('\n').slice(0, -1).map(str => parseInt(str));

function moveAlong(arr) {
    let initialPos = 0;
    let step = 0;
    let finished = false;

    while (!finished) {
        // move along by current amount
        const newPos = initialPos + arr[ initialPos ];
        // increment the number of steps taken
        step++;
        // increment the number on which you last sat
        arr[ initialPos ]++;
        // update to new position
        initialPos = newPos;
        // check if now off array
        finished = arr[ newPos ] === undefined;
    }
    return step;
}
function moveAlongWithNegative(arr) {
    let initialPos = 0;
    let step = 0;
    let finished = false;

    while (!finished) {
        // move along by current amount
        const newPos = initialPos + arr[ initialPos ];
        // increment the number of steps taken
        step++;
        // increment the number on which you last sat
        arr[ initialPos ] < 3 ? arr[ initialPos ]++ : arr[ initialPos ]--;
        // update to new position
        initialPos = newPos;
        // check if now off array
        finished = arr[ newPos ] === undefined;
    }
    return step;
}

const evaluate = (data, method) => R.composeP(
    method,
    string2IntArr,
    readFile,
)(data);

printP(evaluate('5_text.txt', moveAlong));
printP(evaluate('5_text.txt', moveAlongWithNegative));
