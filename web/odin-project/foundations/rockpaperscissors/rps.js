function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random(3) * 3);
  return options[choice];
}

function getPlayerChoice() {
  return prompt("Rock, Paper or Scissors");
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();

  if (computerChoice === playerChoice) {
    return "You Tie";
  } else if (
    (playerChoice === "rock" && computerChoice == "scissors") ||
    (playerChoice === "scissors" && computerChoice == "paper") ||
    (playerChoice === "paper" && computerChoice == "rock")
  ) {
    return `You Win ${playerChoice} Beats ${computerChoice}`;
  } else {
    return `You Lose ${computerChoice} Beats ${playerChoice}`;
  }
}

function playGame() {
  let PlayerScore = 0;
  let ComputerScore = 0;

  for (let i = 0; i < 5; ++i) {
    let result = playRound(getPlayerChoice(), getComputerChoice());

    switch (result[4]) {
      case "T":
        break;
      case "W":
        PlayerScore += 1;
        break;
      case "L":
        ComputerScore += 1;
        break;
    }
    console.log(result);
    console.log(
      `Your Score is ${PlayerScore}\nThe Computer Score is ${ComputerScore}`,
    );
  }
  if (PlayerScore > ComputerScore) {
    return "You Win";
  } else if (PlayerScore === ComputerScore) {
    return "You Tie";
  } else {
    return "You Lose";
  }
}
