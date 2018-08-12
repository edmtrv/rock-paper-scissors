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
  checkScore();
}

function updateScore(winner) {
  const score = document.querySelector(`#${winner}`);
  score.innerText = +score.innerText + 1;
}

function checkScore() {
  const pScore = document.querySelector('#player').textContent;
  const cScore = document.querySelector('#comp').textContent;
  const h2 = document.createElement('h2');
  const container = document.querySelector('.container');

  if (+pScore == 5) {
    h2.textContent = 'You have won!';
    h2.style.color = 'green';
    reset();
    container.appendChild(h2);
  } else if (+cScore == 5) {
    h2.textContent = 'You have lost!'
    h2.style.color = 'red';
    reset(); 
    container.appendChild(h2);
  }
}

function reset() {
  const pScore = document.querySelector('#player');
  const cScore = document.querySelector('#comp');
  const rounds = document.querySelector('.rounds');

  pScore.textContent = '0';
  cScore.textContent = '0';
  rounds.innerHTML = '';
}

function showResult(winner, player, comp) {
  const p = document.createElement('p');
  const rounds = document.querySelector('.rounds');

  if (winner === 'player') {
    p.innerText = `You win! ${player} beats ${comp}!`;
    updateScore('player')
  } else if (winner === 'comp') {
    p.innerText = `You lose! ${comp} beats ${player}!`;
    updateScore('comp')
  } else {
    p.innerText = `It's a tie! ${player} equals ${comp}.`;
  }

  rounds.appendChild(p);
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

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener(
  'click', (e) => playRound(e.target.textContent, computerPlay())
));

