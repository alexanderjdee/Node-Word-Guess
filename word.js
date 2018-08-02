var Letter = require("./letter.js");

var Word = function(){
    this.word = [];

    this.convertToArray = function(word){
        for(i=0; i<word.length; i++){
            var letterObject = new Letter(word.charAt(i));
            this.word.push(letterObject);
        }
    };

    this.returnWord = function(){
        var charactersDisplay = [];
        for(i=0; i<this.word.length; i++){
            charactersDisplay[i] = this.word[i].toString();
        }
        return charactersDisplay.join(" ");
    };

    this.guessCheck = function(character){
        for(i=0; i<this.word.length; i++){
            this.word[i].characterCheck(character);
        }
    };
};

module.exports = Word;

// var newWord = new Word();
// newWord.word = [new Letter("T"), new Letter("E"), new Letter("S"), new Letter("T")];

// console.log(newWord.returnWord());

// newWord.guessCheck("t");

// console.log(newWord.returnWord());