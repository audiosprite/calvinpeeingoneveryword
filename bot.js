const gm = require('gm');
const twit = require('twit');
const rp = require('request-promise');
const fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const words = require('./wordsnoapostrophes.txt');

// find word, then

var wordsArr = words.split("\n");

// const interpolate = function(word){
// }

// console.log(words);

console.log(wordsArr[0]); // string

