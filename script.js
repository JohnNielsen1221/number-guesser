let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, compGuess, secNum) => {
    if (Math.abs(humanGuess - secNum) < Math.abs(compGuess - secNum)) {
        return true;
    } else if (Math.abs(humanGuess - secNum) > Math.abs(compGuess - secNum)) {
        return false;
    } else {
        return true;
    };
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++
    } else if (winner === 'computer') {
        computerScore++
    }
};

const advanceRound = () => {
    currentRoundNumber++
};