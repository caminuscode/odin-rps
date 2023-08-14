let computerScore = 0;
let playerScore = 0;

const rps = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}

function getPlayerChoice() {
  let choice = prompt("Please enter Rock, Paper, or Scissors").toLowerCase();
  let validate = 0;
  while (validate == 0) {
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
      validate = 1;
      return choice;
    } else {
      choice = prompt("Please enter Rock, Paper, or Scissors").toLocaleLowerCase();
    }
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Draw") {
    return "It's a Tie!";
  } else if (result == "Player") {
    playerScore++;
    keepScore();
    checkGameOver();
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    computerScore++;
    keepScore();
    checkGameOver();
    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Draw";
  } else if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function resetScore() {
  if (playerScore == 5 || computerScore == 5) {
    playerScore = 0;
    computerScore = 0;
    keepScore();
  }
}

function checkGameOver() {
  if (computerScore >= 5) {
    alert("Game Over. You Lose.");
  } else if (playerScore >= 5) {
    alert("Game Over. You Win.");
  }
}
const results = document.querySelector("#results");

const rockBtn = document.querySelector(`#rock`);
rockBtn.addEventListener(`click`, () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  results.textContent = playRound(playerSelection, computerSelection);
  resetScore();
});

const paperBtn = document.querySelector(`#paper`);
paperBtn.addEventListener(`click`, () => {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  results.textContent = playRound(playerSelection, computerSelection);
  resetScore();
});

const scissorsBtn = document.querySelector(`#scissors`);
scissorsBtn.addEventListener(`click`, () => {
  playerSelection = "scissors";
  computerSelection = getComputerChoice();
  results.textContent = playRound(playerSelection, computerSelection);
  resetScore();
});

function keepScore() {
  const score = document.querySelector("#score");
  score.textContent = `${playerScore} : ${computerScore}`;
}
