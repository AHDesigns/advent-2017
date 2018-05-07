const R = require('ramda');
const { readFile, printP } = require('./utils/utils');

const arr = [0, 2, 7, 0];

const string2IntArr = string => string.split('\t').map(str => parseInt(str));

function redistribute(arr) {
    const largest = arr.reduce((acc, curr) => (curr > acc ? curr : acc));
    const posOfLargest = arr.indexOf(largest);

    const numberOfBanks = arr.length - 1;
    arr[ posOfLargest ] = 0;

    let loops = 0;
    let posInArr = posOfLargest + 1;
    let memToDistribute = largest;

    while (memToDistribute > 0) {
        if (posInArr % arr.length === 0) {
            loops++;
        }
        const loopBack = loops * arr.length;
        arr[ posInArr - loopBack ]++;
        memToDistribute--;
        posInArr++;
    }
    return arr;
}

function isArrInMemory(arr, mem) {
    return [mem.filter(oldMem => oldMem === arr).length > 0, mem.indexOf(arr)];
}


const redistributeTillRepeated = (oldDist) => {
    // create memory array
    const memDistLog = [];
    const i = 0;

    while (!isArrInMemory(oldDist.toString(), memDistLog)[ 0 ]) {
        // add the array to memory
        memDistLog.push(oldDist.toString());

        // get the new distribution
        const newDist = redistribute(oldDist);

        // update the array for comparison
        oldDist = [...newDist];
    }
    return { memDistLog, pos: isArrInMemory(oldDist.toString(), memDistLog)[ 1 ] };
};

function repeatTillFound(arr) { return arr.memDistLog.length; }
function positionDifference(arr) { return arr.memDistLog.length - arr.pos; }

const evaluate = (data, method) => R.composeP(
    method,
    redistributeTillRepeated,
    string2IntArr,
    readFile,
)(data);

const test = () => redistributeTillRepeated(arr);

printP(evaluate('6_text.txt', test));
printP(evaluate('6_text.txt', repeatTillFound)); // 6681
printP(evaluate('6_text.txt', positionDifference)); // 2302
