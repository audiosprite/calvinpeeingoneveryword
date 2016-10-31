const gm = require('gm').subClass({imageMagick: true});
const twit = require('twit');
const fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const words = require('./wordsnoapostrophes.txt');
var wordsArr = words.split("\n");

// find word
var index = require('./index.txt');
currentIndex = Number(index);
console.log('currentIndex', currentIndex, 'word', wordsArr[currentIndex]);
var currentWord = wordsArr[currentIndex];

// increment index
const increment = function(){
    fs.writeFile('./index.txt', (currentIndex+1).toString(), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Index was incremented to " + (currentIndex+1));
    });
}

var calvinjpg = './calvin.jpg';

// interpolate
const interpolate = function(word){
    gm(calvinjpg)
    // .flop()
    .font("Arial.ttf", 30)
    .fill('#000000')
    .stroke('#000000')
    .drawText(130, 170, 'testtttttttttttttttt', 'center')
    .write('./final.jpg', function(err){
        if (!err) console.log('done');
    })
}

const interpolateFlopped = function(word){
    gm(calvinjpg)
    .flop()
    .font("Arial.ttf", 30)
    .fill('#000000')
    .stroke('#000000')
    .drawText(-130, 170, 'testtttttttttttttttt', 'center')
    .write('./final.jpg', function(err){
        if (!err) console.log('done');
    })
}

increment();
if (Math.random() > 0.5){
    interpolate(currentWord);
} else {
    interpolateFlopped(currentWord);
}