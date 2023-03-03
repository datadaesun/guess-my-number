"use strict";

function getRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function setNumberWidth(width) {
  document.querySelector(".number").style.width = width;
}

function setScores(score) {
  document.querySelector(".score").textContent = score;
}

function setNumberText(text) {
  document.querySelector(".number").textContent = text;
}

function setBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

let secretNumber = getRandomNumber();
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    highScore < score ? (highScore = score) : highScore;

    displayMessage("🥳 Correct Number!");
    setNumberWidth("30rem");
    setNumberText(String(secretNumber));
    setBackgroundColor("#60b347");

    // When guess does not equal the secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage("📈 Too High!")
        : displayMessage("📉 Too Low!");
      document.querySelector(".score").textContent = score;
      score--;
    } else {
      displayMessage("💥 You Lost The Game!");
      setScores("0");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = getRandomNumber();

  setNumberWidth("15rem");
  displayMessage("Start guessing...");
  setScores("20");
  setNumberText("?");
  setBackgroundColor("#222");

  document.querySelector(".guess").value = "";
  document.querySelector(".highscore").textContent = String(highScore);
});
