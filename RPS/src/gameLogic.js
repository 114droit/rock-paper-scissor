const ComputerChoice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return ComputerChoice[Math.floor(Math.random() * 3)];
}