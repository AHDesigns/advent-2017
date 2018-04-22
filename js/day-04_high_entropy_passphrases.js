const R = require('ramda');

const { readFile, printP } = require('./utils');

const duplicateWords = (arr) => {
        return arr.some((arrElement, i) => (
                arr.filter((test, j) => (test === arrElement && i !== j)).length > 0
        )) > 0
};

const anagramInArr = (arr) => duplicateWords(arr.map(word => word.split('').sort().join('')));

const stringTo2dArray = (string) => string.split('\n').map(phrase => phrase.split(' '));

const findAnswer = (data, method) => data.filter(pass => (method(pass)));

const answer = (arr) => arr.length;
const noDuplicates = (data) => data.filter(arr => !duplicateWords(arr));
const noDuplicatesOrAnagrams = (data) => data.filter(arr => !duplicateWords(arr) && !anagramInArr(arr))

const evaluate = (data, method) => R.composeP(
        answer,
        method,
        stringTo2dArray,
        readFile
)(data);

printP(evaluate('./4_data.txt', noDuplicates));
printP(evaluate('./4_data.txt', noDuplicatesOrAnagrams));
