import {getComputerChoice, getResult} from './gameLogic.js';

import './style.css';

const startScreen = document.getElementById('startscreen');
const startButton = document.getElementById('startbutton');
// const rulesButton = document.getElementById('rulesbutton');
const score = document.getElementById('score');
const userchoice = document.getElementById('userchoice');
const compChoice = document.getElementById('computerchoice');
const gameResult = document.getElementById('result');

const choiceButtons = document.querySelectorAll("button[data-choice]");

choiceButtons.forEach((button) => {
    button.addEventListener('click', playRound());
})

startButton.addEventListener('click', startGame);

function startGame() {
    startScreen.classList.add('hidden');
}

function playRound(event) {
    const playerChoice = event.target.dataset.choiceButtons;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, result);
}

function updateUI(playerChoice, computerChoice, result) {
    userchoice.textContent = playerChoice;
    compChoice.textContent = computerChoice;
    gameResult.textContent = `You ${result}!`;
    if (result === 'win') {
        score.textContent = parseInt(score.textContent) + 1;
    } else if (result === 'lose') {
        score.textContent = parseInt(score.textContent) - 1;
    }
}