'use strict';

// Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');

// reset elemetns
score0.textContent = 0;
score1.textContent = 0;

// Hide the dice
dice.classList.add('hidden');
