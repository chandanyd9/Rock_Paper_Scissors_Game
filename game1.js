let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScoreMsg = document.querySelector("#my-score");
let comScoreMsg = document.querySelector("#com-score");

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game was draw";
  msg.style.backgroundColor = "blue";
};

let showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    console.log("You win");
    msg.innerText = `You Win!, Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScoreMsg.innerText = userScore;
  } else {
    console.log("You loss! try again");
    msg.innerText = `You loss! ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    comScore++;
    comScoreMsg.innerText = comScore;
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
};

const getcomChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const indexId = Math.floor(Math.random() * 3);
  return option[indexId];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
    let comChoice = getcomChoice();
    console.log("com choice =", comChoice);

    if (userChoice === comChoice) {
      drawGame();
    } else {
      let userWin = true;

      if (userChoice === "rock") {
        userWin = comChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        userWin = comChoice === "scissors" ? false : true;
      } else {
        userWin = comChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, comChoice);
    }
  });
});
