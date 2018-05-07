const R = require('ramda');
const { readFile, printP } = require('./utils/utils');

const arr = [];
const regName = /^[a-z]+\b/g;
const regChildren = / [a-z]+\b/g;
const regWeight = /\d+/g;
// const regWeight = /\d|)}>#g;


function string2Object(str = '') {
        const stringAsArray = str.split('\n').slice(0,-1);
        const myObj = {};
        const arrayToObject = stringAsArray.forEach((program) => {
                const name = program.match(regName);
                const weight = parseInt(program.match(regWeight))
                const children = program.match(regChildren) || [];

                const childrenObj = { weight };

                children.forEach(key => {
                        Object.assign(childrenObj, { [key.trim()]: {} })
                });

                const prog = {
                        [name]: childrenObj
                }

                var condition = children.length !== 0;
                condition = true;

                if (condition) {
                        Object.assign(myObj, prog);
                }
        });

        return myObj;
};

const leaf = (obj, path) => (path.split('.').reduce((value,el) => value[el], obj))

function findPath(keyToFind, obj) {
        // keyToFind 'something'
        console.log('key to find', keyToFind);
        const keys = Object.keys(obj)
        var count = keys.length;

        while (count > 0) {
                if (obj[count] ===
        }
        // return path;
};

function goDeeper() {
}

function moveObject(key, obj) {
        const keys = Object.keys(obj);
        var root = true;

        keys.forEach(keyToStudy => { 
                if (keyToStudy === key) return null;

                const children = Object.keys(obj[keyToStudy]);
                children.forEach(child => {
                        if (child === key) {
                                root = false;
                                obj[keyToStudy][child] = obj[key];
                                // delete obj[key];
                        }
                })
        })
        if (!root) delete obj[key];
}

function doStuff(a) {

        console.log(a)
        const keys = Object.keys(a);
        keys.forEach(key => {
                // moveObject(key, a);
                findPath(key, a);
        })
        return a;
}

const evaluate = (data, method) => R.composeP(
        method,
        string2Object,
        readFile
)(data);

const test = () => doStuff(arr);

printP(evaluate('7_example.txt', doStuff));
// evaluate('7_text.txt', doStuff);
