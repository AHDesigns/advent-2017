const stringToNum = s => parseInt(s, 10);

const stringToNumArr = (numberString, seperator) => numberString
    .split(seperator)
    .map(stringToNum);

const stringTo2dNumArr = seperator => string => string
    .split('\n')
    .map(input => stringToNumArr(input, seperator));

module.exports = {
    stringToNumArr,
    stringTo2dNumArr,
};
