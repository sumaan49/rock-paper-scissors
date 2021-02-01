const humanChoice = document.querySelectorAll('.icon');

const result = document.querySelector('.result');
const playerName = document.querySelector('.right');
const playerScore = document.getElementById('human');
const computerScore = document.getElementById('computer');
const gameDisplay = document.querySelector('#gameNumber');
const reset = document.getElementById('reset');


let playerPoints = 0;
let computerPoints = 0;
let gameNumber = 0;


function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    return 'ROCK';
  } else if (random === 2) {
    return 'PAPER';
  } else {
    return 'SCISSORS'
  }
}


reset.addEventListener('click', resetGame);


function getWinner(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    result.textContent = `COMPUTER throws ${computerSelection}. It is a tie.`;
  }
  if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {
    result.textContent = `COMPUTER throws ${computerSelection}. You lose! ${computerSelection} beats ${playerSelection}.`;
    computerPoints++;
    computerScore.textContent = computerPoints;
  }
  if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
    result.textContent = `COMPUTER throws ${computerSelection}. You win! ${playerSelection} beats ${computerSelection}.`;
    playerPoints++;
    playerScore.textContent = playerPoints;
  }
  gameNumber++;
  gameDisplay.textContent = gameNumber;
  console.log(gameNumber);
  overYet();
}

function startGame() {
  alert('LETS PLAY 10 ROUNDS OF ROCK PAPER SCISSORS AND SEE WHO WINS...');
  let name = window.prompt('ENTER YOUR NAME TO BEGIN..', 'NAME');
  playerName.textContent = name;
  humanChoice.forEach(choice => {
    choice.addEventListener('click', getPlayerChoice);
  });
}

function getPlayerChoice(e) {
  playerChoice = e.target.id.toUpperCase();
  console.log(playerChoice);
  getWinner(computerPlay(), playerChoice);
}

function overYet() {
  if (gameNumber === 10) {
    result.style.fontSize = '40px';
    humanChoice.forEach(choice => {
      choice.removeEventListener('click', getPlayerChoice);
    });
    if (playerPoints > computerPoints) {
      result.textContent = 'You are the ultimate winner!!';
      result.style.color = 'green';
    } else if(playerPoints === computerPoints) {
      result.textContent = 'Looks like you\'re a tough one....Interesting!!!';
      result.style.color = 'grey';
    } else {
      result.textContent = 'You lose..Bow before your king !!';
      result.style.color = 'rgb(209, 18, 18)';
    }
  }

}

function resetGame() {
  location.reload();
}


startGame();
