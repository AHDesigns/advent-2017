var fs = require('fs');

function duplicateWords(arr) {
        return arr.some((arrElement, i) => (
                arr.filter((test, j) => (test === arrElement && i !== j)).length > 0
        )) > 0
};

function anagramInArr(arr) {
        return duplicateWords(arr.map(word => word.split('').sort().join('')));
}

function doStuff(data) {
        return data.split('\n')
                .map(pwd => pwd.split(' '))
                .filter(pass => (!duplicateWords(pass) && !anagramInArr(pass)));
};

fs.readFile('./4_data.txt', 'utf8', function(err,data){
        if (err) return;
        else {
                console.log(doStuff(data).length);
        }
})
