const R = require('ramda');

const { readFile, printP } = require('./utils/utils');

const stringToObject = (string) => {
    const obj = {};
    string.split('\n').map((line) => {

    });
};
// const stringTo2dArray = (string) => string.split('\n').map(phrase => phrase.split(' '));

const evaluate = data => R.composeP(
    stringToObject,
    readFile,
)(data);

printP(evaluate('./13_data.txt'));
