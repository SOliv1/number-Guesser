
// Write your code below:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

/*this code has been generated from  the const compareGuesses = (humanGuess, computerGuess, targetNumbers) => 
     Math.abs(targetNumbers - humanGuess) <= Math.abs(targetNumbers - computerGuess) ? true : false ;*/

let humanGuess = 0;
let computerGuess = 0;
let targetNumbers = generateTarget();

const getAbsoluteDistance = (guess, target) => 
  Math.abs(target - guess);

const compareGuesses = (humanGuess, computerGuess, targetNumbers) => 
     getAbsoluteDistance(humanGuess, targetNumbers) <= 
	 getAbsoluteDistance(computerGuess, targetNumbers) ? true : false ;
const check = humanGuess => {
  if (humanGuess > 9) { 
  window.alert( 'Your number is out of range! Pleas, choose number between 0 and 9.')
  }

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
  }

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;


