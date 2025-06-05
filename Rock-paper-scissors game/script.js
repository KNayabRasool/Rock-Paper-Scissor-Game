function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = "";
  let resultClass = "";

  if (userChoice === computerChoice) {
    resultText = `🤝 It's a draw! You both chose ${userChoice}.`;
    resultClass = "draw";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText = `🎉 You win! ${userChoice} beats ${computerChoice}.`;
    resultClass = "win";
  } else {
    resultText = `💥 You lose! ${computerChoice} beats ${userChoice}.`;
    resultClass = "lose";
  }

  const resultElem = document.getElementById("result");
  resultElem.textContent = resultText;
  resultElem.className = resultClass;

  // Re-trigger animation by removing and re-adding class
  void resultElem.offsetWidth;
  resultElem.classList.add(resultClass);
}
