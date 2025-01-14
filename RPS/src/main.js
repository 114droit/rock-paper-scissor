const startScreen = document.getElementById('startscreen');
const startButton = document.getElementById('startbutton');
const rulesButton = document.getElementById('rulesbutton');
const score = document.getElementById('score');
const results = document.getElementById('results');

const choiceButtons = document.querySelectorAll("button[data-choice]");

choiceButtons.forEach((button) => {
    button.addEventListener('click', makeChoice);
});

startButton.addEventListener('click', startGame);

function startGame() {
    startScreen.classList.add('hidden');
}

function makeChoice(event) {
    const playerChoice = event.target.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getWinner(playerChoice, computerChoice);
    showResults(playerChoice, computerChoice, result);
}
