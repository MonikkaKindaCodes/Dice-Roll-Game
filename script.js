'use strict';
//Selecting Elements
const playerOneScoreTot = document.querySelector('#score--0');
const playerTwoScoreTot = document.querySelector('#score--1');
const diceImgHidden = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const activatePlayer = document.querySelector('.player--active');

//Starting Conditions
playerOneScoreTot.textContent = 0;
playerTwoScoreTot.textContent = 0;
diceImgHidden.classList.add('hidden');

//Rolling the Dice
btnRoll.addEventListener('click', function () {
  // Random Dice Roll
  const dice = Math.trunc(Math.random() * 6) + 1; //Truncating with Math.random method

  // Displaying Dice - Removing Hidden Class
  diceImgHidden.classList.remove('hidden');

  //Maniputlating the src of the HTML to display the correct image.
  diceImgHidden.src = `dice-${dice}.png`;
  console.log(dice);

  // If a 1 is rolled, switch to player 2
  if (dice !== 1) {
  } else {
  }
});
