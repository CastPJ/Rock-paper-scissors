const enemyShapeImage = document.getElementById("enemy-shape");
const playerShapeImage = document.getElementById("player-shape");
const rock = "/images/rock.png";
const paper = "/images/paper.png";
const scissors = "/images/scissors.png";

wrapper.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "IMG";
  if (!isButton) {
    return;
  }

  game(e);
});

let playerPoints = 0;
let enemyPoints = 0;

function game(e) {
  const yourShape = e.target.id;
  const shapeNumber = Math.floor(Math.random() * 3);
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

  console.log(`You played ${yourShape} vs. enemy's ${enemyShape}`);
  console.log(result);

  if (result === "You won") {
    playerPoints++;
  } else if (result === "You lost") {
    enemyPoints++;
  }
}

// const showScore = document.getElementById("show");
// showScore.addEventListener("click", () => {
//   console.log(`Your score: ${playerPoints}, Enemy score: ${enemyPoints}`);
// });
