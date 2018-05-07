/* --------------------------------------------- */
/* UTILS
/* --------------------------------------------- */

const not = predicate => (...args) => !predicate(...args);
const compose = (...funcs) => input => funcs.reduce((cum, func) => func(cum), input);
const findLength = arr => arr.length;
const filter = predicate => array => array.filter(predicate);


module.exports = {
    not,
    compose,
    findLength,
    filter,
};
