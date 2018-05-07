const stringToNumArr = (numberString, seperator) => numberString
    .split(seperator).map(n => parseInt(n, 10));

const stringTo2dNumArr = seperator => string => string
    .split('\n')
    .map(input => stringToNumArr(input, seperator));

module.exports = {
    stringToNumArr,
    stringTo2dNumArr,
};
