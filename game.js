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
        result = 'player'
  } else if ((player === 'rock' && comp === 'rock') ||
            (player === 'scissors' && comp === 'scissors') ||
            (player === 'paper' && comp === 'paper')) {
              result = 'tie';
  } else {
    result = 'comp';
  }

  showResult(result, playerSelection, computerSelection);

  return result;
}

function showResult(winner, player, comp) {
  let result;

  if (winner === 'player') {
    result = `You win! ${player} beats ${comp}!`;
  } else if (winner === 'comp') {
    result = `You lose! ${comp} beats ${player}!`;
  } else {
    result = `It's a tie! ${player} equals ${comp}.`;
  }

  console.log(result);
}

function game(rounds) {
  let playerScore = 0;
  let compScore = 0
  for (let i = 0; i < rounds; i++) {
    let player = prompt('Pick: ');
    let wonRound = playRound(player, computerPlay());

    if (wonRound === 'player') {
      playerScore++;
    } else if (wonRound === 'comp') {
      compScore++;
    }

    console.log(`Round ${i+1} Score - Player: ${playerScore} | Computer: ${compScore}`);
  }

  if (playerScore > compScore) {
    console.log('Winner: Player');
  } else if (playerScore < compScore) {
    console.log('Winner: Computer')
  } else {
    console.log('It\'s a tie');
  }
  
}

game(5);