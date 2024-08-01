wrapper.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }

  game(e);
});

function game(e) {
  const yourShape = e.target.id;
  const shapeNumber = Math.floor(Math.random() * 3);
  switch (shapeNumber) {
    case 0:
      enemyShape = "rock";
      break;
    case 1:
      enemyShape = "paper";
      break;
    case 2:
      enemyShape = "scissors";
  }

  let result;
  if (yourShape === "rock") {
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
}
