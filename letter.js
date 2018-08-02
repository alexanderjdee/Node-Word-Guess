var Letter = function(character){
    this.character = character.toUpperCase();
    this.guessed = false;

    this.characterCheck = function(guessedCharacter){
        if(this.character === guessedCharacter.toUpperCase()){
            this.guessed = true;
        }
    };
};

Letter.prototype.toString = function(){
    if(this.guessed){
        return this.character;
    }
    else{
        return "_";
    }
};

module.exports = Letter;

// var letter = new Letter("A");

// letter.characterCheck("B");
// console.log(letter + "");

// letter.characterCheck("A");
// console.log(letter + "");



