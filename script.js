'use strict';
//Grabbing the HTML elements
const overallScore1 = document.getElementById('score--0');
const overallScore2 = document.getElementById('score--1');
const activePlayerOne = document.getElementById('current--0');
const activePlayerTwo = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');

//Start/ Reset of Game
overallScore1.textContent = 0;
overallScore2.textContent = 0;
diceImg.classList.add('hidden');

let currentScore = 0;

//Rolling dice

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${dice}.png`;
  console.log(dice);
  if (dice !== 1) {
    currentScore += dice;
    activePlayerOne.textContent = currentScore; //Change later
  } else {
  }
});
