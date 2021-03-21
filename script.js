'use strict';
//Grabbing the HTML elements
const playerZeroBG = document.querySelector('.player--0');
const playerOneBG = document.querySelector('.player--1');
const overallScore1 = document.getElementById('score--0');
const overallScore2 = document.getElementById('score--1');
const activePlayerOne = document.getElementById('current--0');
const activePlayerTwo = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//Start/ Reset of Game
overallScore1.textContent = 0;
overallScore2.textContent = 0;
diceImg.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerZeroBG.classList.toggle('player--active');
    playerOneBG.classList.toggle('player--active');
  }
});
