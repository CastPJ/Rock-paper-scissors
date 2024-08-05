const enemyShapeImage = document.getElementById("enemy-shape");
const playerShapeImage = document.getElementById("player-shape");
const rock = "/images/rock.png";
const paper = "/images/paper.png";
const scissors = "/images/scissors.png";
const score = document.getElementById("score");
const resultField = document.getElementById("result-field");
const resetBtn = document.getElementById("reset");

var isActive = true;

wrapper.addEventListener("click", (e) => {
  if (!isActive) return;

  const isButton = e.target.nodeName === "IMG";
  if (!isButton) {
    return;
  }

  game(e);
});

resetBtn.addEventListener("click", reset);

let playerPoints = 0;
let enemyPoints = 0;

function game(e) {
  const yourShape = e.target.id;
  const shapeNumber = Math.floor(Math.random() * 3);
  let enemyShape;

  switch (shapeNumber) {
    case 0:
      enemyShape = "rock";
      enemyShapeImage.src = rock;
      break;
    case 1:
      enemyShape = "paper";
      enemyShapeImage.src = paper;
      break;
    case 2:
      enemyShape = "scissors";
      enemyShapeImage.src = scissors;
      break;
  }

  let result;
  let resultShow;

  if (yourShape === "rock") {
    playerShapeImage.src = rock;
    switch (enemyShape) {
      case "rock":
        result = "Tie";
        break;
      case "paper":
        result = "You lost";
        break;
      case "scissors":
        result = "You won";
        break;
    }
  } else if (yourShape === "paper") {
    playerShapeImage.src = paper;
    switch (enemyShape) {
      case "rock":
        result = "You won";
        break;
      case "paper":
        result = "Tie";
        break;
      case "scissors":
        result = "You lost";
        break;
    }
  } else if (yourShape === "scissors") {
    playerShapeImage.src = scissors;
    switch (enemyShape) {
      case "rock":
        result = "You lost";
        break;
      case "paper":
        result = "You won";
        break;
      case "scissors":
        result = "Tie";
        break;
    }
  }

  if (result === "You won") {
    playerPoints++;
    resultShow = "Won";
    resultField.classList.remove("lose", "tie");
    resultField.classList.add("win");
  } else if (result === "You lost") {
    enemyPoints++;
    resultShow = "Lost";
    resultField.classList.remove("win", "tie");
    resultField.classList.add("lose");
  } else if (result === "Tie") {
    resultShow = "Tie";
    resultField.classList.remove("lose", "win");
    resultField.classList.add("tie");
  }

  if (playerPoints >= 5) {
    resultShow = "Player won !!";
    isActive = false;
    resetBtn.innerText = "New game";
  } else if (enemyPoints >= 5) {
    resultShow = "Player lost !!";
    isActive = false;
    resetBtn.innerText = "New game";
  }

  score.innerText = `Player ${playerPoints} : ${enemyPoints} Enemy`;
  resultField.innerText = resultShow;
}

function reset() {
  score.innerText = `Player 0 : 0 Enemy`;
  resultField.innerText = "------";
  resultField.classList.remove("lose", "win", "tie");
  playerPoints = 0;
  enemyPoints = 0;
  enemyShapeImage.src = "/images/empty.png";
  playerShapeImage.src = "/images/empty.png";
  isActive = true;
  resetBtn.innerText = "Reset game";
}
