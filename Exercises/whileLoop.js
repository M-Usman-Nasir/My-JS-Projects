// While Loop Exercise: 01
// simple number guessing game

// Solution Code:
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let target = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
const askQuestion = () => {
    rl.question("Guess a number between 1 and 10: ", (input) => {
        const guess = parseInt(input);

        if (guess === target) {
            console.log("You guessed it!");
            rl.close();
        } else if (guess > target) {
            console.log("Too high! Guess again.");
            askQuestion();
        } else {
            console.log("Too low! Guess again.");
            askQuestion();
        }
    });
};

askQuestion();