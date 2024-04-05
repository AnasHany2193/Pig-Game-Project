'use strict';

// Selecting elements
const score0 = document.getElementById('score--0');
const current0 = document.getElementById('current--0');

const score1 = document.getElementById('score--1');
const current1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

// initial State
score0.textContent = 0;
current0.textContent = 0;

score1.textContent = 0;
current1.textContent = 0;

dice.classList.add('hidden');
let currentScore = 0;

// --------- User rolls dice ---------
btnRoll.addEventListener('click', function () {
  // Generate random dice roll
  const diceNum = Math.trunc(Math.random() * 6) + 1;

  // Display dice roll
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNum}.png`;

  // Check it dice is 1? Swtich player : add score && new score
  if (diceNum === 1) {
    // Swtich player
  } else {
    // Add dice roll to Current Score
    currentScore += diceNum;
    current0.textContent = currentScore; // Change Later
  }
});
