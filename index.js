// create function for computer to pick rock paper or scissors

const rps = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}

//Write a function to check the winner. Return the winner

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

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Draw") {
    return "It's a Tie!";
  } else if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

//Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
function getPlayerChoice() {
  let choice = prompt("Please enter Rock, Paper, or Scissors").toLowerCase();
  let validate = 0;
  while (validate == 0) {
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
      validate = 1;
      return choice;
    } else {
      choice = prompt(
        "Please enter Rock, Paper, or Scissors"
      ).toLocaleLowerCase();
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
