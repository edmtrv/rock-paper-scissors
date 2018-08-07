"use strict"

function computerPlay() {
  const rn = randomNumber();
  let pick;

  if (rn === 0) {
    pick = 'Rock';
  } else if (rn === 1) {
    pick = 'Paper';
  } else {
    pick = 'Scissors';
  }

  return pick;
}

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const comp = computerSelection.toLowerCase();
  let result;

  if ((player === 'rock' && comp === 'scissors') ||
      (player === 'scissors' && comp === 'paper') ||
      (player === 'paper' && comp === 'rock')) {
        result = `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if ((player === 'rock' && comp === 'rock') ||
             (player === 'scissors' && comp === 'scissors') ||
             (player === 'paper' && comp === 'paper')) {
               result = `It's a tie! ${playerSelection} equals ${computerSelection}.`;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}!`;
  }

  return result;
}

const player = 'Rock';
const comp = computerPlay();
console.log(playRound(player, comp));