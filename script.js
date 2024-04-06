'use strict';

// Selecting elements
const score0 = document.getElementById('score--0');
const current0 = document.getElementById('current--0');

const score1 = document.getElementById('score--1');
const current1 = document.getElementById('current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const dice = document.querySelector('.dice');

// initial State
score0.textContent = 0;
current0.textContent = 0;

score1.textContent = 0;
current1.textContent = 0;

dice.classList.add('hidden');

let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

// switch player function
const swtichPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// --------- User rolls dice ---------
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate random dice roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    // Display dice roll
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`;

    // Check it dice is 1? Swtich player : add score && new score
    if (diceNum === 1) {
      // Swtich player
      swtichPlayer();
    } else {
      // Add dice roll to Current Score
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

// --------- User holds dice ---------
btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to total score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if score >= 100? win player : switch player
    if (scores[activePlayer] >= 100) {
      // Current player Wins!
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch player
      swtichPlayer();
    }
  }
});
