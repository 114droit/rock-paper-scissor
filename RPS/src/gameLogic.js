const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
};

const gameLogic = {
  rock: {
    beats: ['scissors'],
    loses: ['paper'],
    ties: ['rock']
  },
  paper: {
    beats: ['rock'],
    loses: ['scissors'],
    ties: ['paper']
  },
  scissors: {
    beats: ['paper'],
    loses: ['rock'],
    ties: ['scissors']
  }
};

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';
  }

  if (gameLogic[playerChoice].beats.includes(computerChoice)) {
    return 'win';
  }

  return 'lose';
};

export {getComputerChoice, getResult};