const { READ, RUN } = require('./utils/utils');
const { stringTo2dArr } = require('./utils/stringTrasformers');
const {
    not,
    compose,
    findLength,
    filter,
} = require('./utils/functional');

/* --------------------------------------------- */
/* METHS
/* --------------------------------------------- */
const duplicateWords = arr => arr.some((arrElement, i) => (
    arr.filter((test, j) => (test === arrElement && i !== j)).length > 0
)) > 0;

const shuffleWordsAlphabetically = arr => arr.map(word => word.split('').sort().join(''));

const anagramInArr = compose(
    shuffleWordsAlphabetically,
    duplicateWords,
);

const noDuplicates = compose(
    filter(not(duplicateWords)),
    findLength,
);
const noAnagrams = compose(
    filter(not(anagramInArr)),
    findLength,
);

/* --------------------------------------------- */
/* READ
/* --------------------------------------------- */
READ('04', stringTo2dArr(' '))(
    RUN(455, noDuplicates),
    RUN(186, noAnagrams),
);
