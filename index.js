let computerScore = 0;
let playerScore = 0;

const rps = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return rps[Math.floor(Math.random() * rps.length)];
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
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
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

const results = document.getElementById("results");

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener(`click`, () => {
  results.textContent = playRound("Rock", getComputerChoice());
  resetScore();
});

const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", () => {
  results.textContent = playRound("Paper", getComputerChoice());
  resetScore();
});

const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", () => {
  results.textContent = playRound("Scissors", getComputerChoice());
  resetScore();
});

function keepScore() {
  const score = document.getElementById("score");
  score.textContent = `${playerScore} : ${computerScore}`;
}

document.getElementById("final");

function checkGameOver() {
  if (computerScore >= 5 || playerScore >= 5) {
    return (final.textContent = "Game Over");
  } else final.textContent = "";
}
