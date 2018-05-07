const clean = x => x[ 0 ] !== ''; // fuck is this hack?? weird js string issue

const stringToArray = (s, seperator) => s.split(seperator, -1);
const stringToNum = s => parseInt(s, 10);

const stringToNumArr = (numberString, seperator) => numberString
    .split(seperator)
    .map(stringToNum);

const stringTo2dArr = seperator => string => string
    .split('\n', -1)
    .map(input => stringToArray(input, seperator))
    .filter(clean);

const stringTo2dNumArr = seperator => string => string
    .split('\n')
    .map(input => stringToNumArr(input, seperator));

module.exports = {
    stringToNum,
    stringToNumArr,
    stringTo2dNumArr,
    stringTo2dArr,
};
