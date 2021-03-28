'use strict';

let score0 = 0;
let score1 = 0;

// let player1 = false;
// let player2 = false;

// Selecting Elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = score0;
score1El.textContent = score1;

dice.classList.add('hidden');

// Rolling Dice Functionality

btnRoll.addEventListener('click', () => {
  const diceNumber = Math.trunc(Math.random() * 5) + 1;
  //   console.log(diceNumber);
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;

  if (player1El.classList.contains('player--active')) {
    score1 += diceNumber;
    score1El.textContent = score1;
    current1El.textContent = diceNumber;
    if (score1 >= 100) {
      alert('Player 2 wins');
      window.location.reload();
    } else if (diceNumber === 1) {
      player1El.classList.remove('player--active');
      player0El.classList.add('player--active');
    }
  } else {
    score0 += diceNumber;
    score0El.textContent = score0;
    current0El.textContent = diceNumber;
    if (score0 >= 100) {
      alert('Player 1 wins');
      window.location.reload();
    } else if (diceNumber === 1) {
      player0El.classList.remove('player--active');
      player1El.classList.add('player--active');
    }
  }
});

btnHold.addEventListener('click', () => {
  if (player0El.classList.contains('player--active')) {
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');
  } else {
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
  }
});

btnNew.addEventListener('click', () => {
  window.location.reload();
});
