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

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZeroBG.classList.toggle('player--active');
  playerOneBG.classList.toggle('player--active');
};

let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  overallScore1.textContent = 0;
  overallScore2.textContent = 0;
  activePlayerOne.textContent = 0;
  activePlayerTwo.textContent = 0;

  diceImg.classList.add('hidden');
  playerZeroBG.classList.remove('player--winner');
  playerOneBG.classList.remove('player--winner');
  playerZeroBG.classList.add('player--active');
  playerOneBG.classList.remove('player--active');
};

init();

//Rolling dice

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

//Hold Current Score
btnHold.addEventListener('click', function () {
  if (playing) {
    //Add current score to active player
    scores[activePlayer] += currentScore; //scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check score is already at 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //If yes, finish game
      //If not, go to the next player
      switchPlayer();
    }
  }
});

//Resetting the Game
newGame.addEventListener('click', init);
