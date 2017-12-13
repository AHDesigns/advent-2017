var fs = require('fs');
var R = require('ramda');

function readFile(file) { return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', function(err,data){
                err ? reject(err) : resolve(data);
        })
})};

function duplicateWords(arr) {
        return arr.some((arrElement, i) => (
                arr.filter((test, j) => (test === arrElement && i !== j)).length > 0
        )) > 0
};

function anagramInArr(arr) {
        return duplicateWords(arr.map(word => word.split('').sort().join('')));
}

function stringTo2dArray(string) {
        return string.split('\n').map(phrase => phrase.split(' '))
}

function findAnswer(data, method) {
        return data.filter(pass => (method(pass)));
};

var answer = (arr) => arr.length;
var noDuplicates = (data) => data.filter(arr => !duplicateWords(arr));
var noDuplicatesOrAnagrams = (data) => data.filter(arr => !duplicateWords(arr) && !anagramInArr(arr))

const evaluate = (data, method) => R.composeP(
        answer,
        method,
        stringTo2dArray,
        readFile
)(data).then(a => console.log(a)).catch(err => console.log(err));

evaluate('./4_data.txt', noDuplicates)

evaluate('./4_data.txt', noDuplicatesOrAnagrams)
