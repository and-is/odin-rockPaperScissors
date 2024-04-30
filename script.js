let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  let n = Math.floor(Math.random() * 3);
  let str;
  switch (n) {
    case 0:
      str = "Rock";
      break;
    case 1:
      str = "Paper";
      break;
    case 2:
      str = "Scissors";
      break;
    default:
      console.log("error");
      break;
  }
  return str;
}

function getHumanChoice() {
  let n = parseInt();
  prompt("Enter 0,1,2 for rock, paper, scissors respectively");
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
  if (humanScore === 5) {
    f.innerText = "";
    sc.innerText = "";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    f.innerText = "";
    sc.innerText = "";
    computerScore = 0;
    humanScore = 0;
  }
  hum.innerText = "You chose " + humanChoice;
  comp.innerText = "Computer chose " + computerChoice;
  if (
    (humanChoice == "Rock" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice == "Scissors") ||
    (humanChoice == "Scissors" && computerChoice == "Rock")
  ) {
    wl.innerText = "You lose!";
    computerScore++;
  } else if (
    (humanChoice == "Rock" && computerChoice == "Rock") ||
    (humanChoice == "Paper" && computerChoice == "Paper") ||
    (humanChoice == "Scissors" && computerChoice == "Scissors")
  ) {
    wl.innerText = "Draw!";
  } else if (
    (humanChoice == "Paper" && computerChoice == "Rock") ||
    (humanChoice == "Scissors" && computerChoice == "Paper") ||
    (humanChoice == "Rock" && computerChoice == "Scissors")
  ) {
    wl.innerText = "You win!";
    humanScore++;
  } else {
    wl.innerText = "Invalid Input!";
  }
  scrs.innerText =
    "Scores are \n You : " + humanScore + " \n Computer : " + computerScore;
  if (humanScore === 5) {
    console.log("'tis time");
    f.innerText = "You're the champ";
    sc.innerText =
      "Final Scores : \n You: " +
      humanScore +
      "\nVS\n  Computer: " +
      computerScore;
  } else if (computerScore === 5) {
    console.log("'tis time");
    f.innerText = "Tough luck mate, try again?";
    sc.innerText =
      "Final Scores : \n You: " +
      humanScore +
      "\nVS\n  Computer: " +
      computerScore;
  }
}

const hum = document.querySelector(".humanChoice");
const comp = document.querySelector(".compChoice");
const wl = document.querySelector(".winOrNo");
const scrs = document.querySelector(".scores");

const f = document.querySelector(".fin");
const sc = document.querySelector(".finScores");

const butt = document.querySelectorAll(".btn");
butt.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.innerText, getComputerChoice());
  });
});

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
