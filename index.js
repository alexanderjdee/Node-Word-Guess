var Word = require("./word.js");
var prompt = require("prompt");
var schema = {
    properties: {
        guess: {
            description: "Guess a letter",
            type: "string",
            pattern: /^[a-zA-Z]+$/,
            message: 'Guesses must only be letters',
            required: true
        },
    }
};

var words = ["BOOTY", "CAPTAIN", "CANNON", "CUTLASS", "GALLEON", "HOOK", "KEELHAUL",
    "MAROON", "MAST", "MUTINY", "PARROT", "PISTOL", "PLANK", "PLUNDER", "RUM", "SCURVY", "TREASURE"];

var selectedWord = new Word();
selectedWord.convertToArray(words[Math.floor(Math.random() * words.length)]);

var guessesRemaining = 12;

var gameLoop = function () {
    console.log("");
    console.log("<----------------------------->");
    console.log("Guesses Remaining: " + guessesRemaining);
    console.log(selectedWord.returnWord());

    if (guessesRemaining > 0) {
        prompt.start();
        prompt.get(schema, function (err, result) {
            selectedWord.guessCheck(result.guess);
            for (i = 0; i < selectedWord.word.length; i++) {
                if (result.guess.toUpperCase() === selectedWord.word[i].character) {
                    break;
                }
                else if (i === selectedWord.word.length - 1 && selectedWord.word[i].guessed === false) {
                    guessesRemaining--;
                }
            }

            for (i = 0; i < selectedWord.word.length; i++) {
                if (selectedWord.word[i].guessed === false) {
                    gameLoop();
                    break;
                }
                else if (i === selectedWord.word.length - 1) {
                    console.log("");
                    console.log("<----------------------------->");
                    console.log("Guesses Remaining: " + guessesRemaining);
                    console.log(selectedWord.returnWord());
                    gameOver(true);
                }
            }
        });
    }
    else {
        gameOver(false);
    }
};

var gameOver = function (won) {
    if (won) {
        console.log("You won!");
    }
    else {
        console.log("You lost!");
    }
};

gameLoop();


// var newWord = new Word();
// newWord.convertToArray("Test");

// console.log(newWord.returnWord());

// newWord.guessCheck("T");

// console.log(newWord.returnWord());