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




