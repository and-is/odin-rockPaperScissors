let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  let n = Math.floor(Math.random() * 3);
  console.log(n);
  let str;
  switch (n) {
    case 0:
      str = "rock";
      break;
    case 1:
      str = "paper";
      break;
    case 2:
      str = "scissors";
      break;
    default:
      console.log("error");
      break;
  }
  return str;
}

function getHumanChoice() {
  let n =
    parseInt();
    //    prompt("Enter 0,1,2 for rock, paper, scissors respectively")
  let str;
  switch (n) {
    case 0:
      str = "rock";
      break;
    case 1:
      str = "paper";
      break;
    case 2:
      str = "scissors";
      break;
    default:
      console.log("error");
      break;
  }
  return str;
}

function playRound(humanChoice, computerChoice) {
  console.log("you chose " + humanChoice);
  console.log("computer chose " + computerChoice);
  if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    console.log("You lose!");
    computerScore++;
  } else if (
    (humanChoice == "rock" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "paper") ||
    (humanChoice == "scissors" && computerChoice == "scissors")
  ) {
    console.log("Draw!");
  } else if (
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "rock" && computerChoice == "scissors")
  ) {
    console.log("You won!");
    humanScore++;
  } else {
    console.log("Invalid input");
  }
  console.log("scores are human:" + humanScore + " computer: " + computerScore);
}

function playGame() {
  let humanChoice;
  let computerChoice;
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log("Final Scores:");
  console.log("You: " + humanScore + " Computer: " + computerScore);
  if (humanScore > computerScore) {
    console.log("You're the champ");
  } else if (humanScore === computerScore) {
    console.log("Close, on the line");
  } else {
    console.log("Tough luck mate, try again?");
  }
}

playGame();
