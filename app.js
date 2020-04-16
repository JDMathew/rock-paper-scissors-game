const game = function () {
  let pScore = 0;
  let cScore = 0;

  function startGame() {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    playButton.addEventListener("click", function () {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      playMatch();
    });
  }
  //Play  Match

  function playMatch() {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    //reset hand animation to "" (blank)
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        hand.style.animation = "";
      });
    });

    //Computer options
    const computerOptions = ["rock", "paper", "scissors"];

    function getcomputer(element) {
      element.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        const winner = document.querySelector(".winner");
        //reset hand to rock position before animation start
        playerHand.src = `./assets/rock.png`;
        computerHand.src = `./assets/rock.png`;
        //animate hands on click
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";

        //Delyaying the result for 2 seconds to wait for animation
        setTimeout(() => {
          //Updaed images
          playerHand.src = `./assets/${element.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
          winner.textContent = whoWon(computerChoice, element.textContent);
          updateScore();
        }, 2000);
      });
    }
    options.forEach(getcomputer);
  }

  const whoWon = (computerChoice, playerChoice) => {
    if (playerChoice === computerChoice) {
      return "You tied";
    } else {
      if (playerChoice !== "rock" && computerChoice !== "rock") {
        if (playerChoice === "scissors") {
          pScore++;
          return "You win";
        } else {
          cScore++;
          return "You lose";
        }
      }
      if (playerChoice !== "paper" && computerChoice !== "paper") {
        if (playerChoice === "rock") {
          pScore++;
          return "You win";
        } else {
          cScore++;
          return "You lose";
        }
      }
      if (playerChoice !== "scissors" && computerChoice !== "scissors") {
        if (playerChoice === "paper") {
          pScore++;
          return "You win";
        } else {
          cScore++;
          return "You lose";
        }
      }
      // if (playerChoice === "rock") {
      //   if (computerChoice === "paper") {
      //     cScore++;
      //     return "You lose";
      //   } else if (computerChoice === "scissors") {
      //     pScore++;
      //     return "You win";
      //   }
      // } else if (playerChoice === "paper") {
      //   if (computerChoice === "scissors") {
      //     cScore++;
      //     return "You lose";
      //   } else if (computerChoice === "rock") {
      //     pScore++;
      //     return "You win";
      //   }
      // } else {
      //   if (computerChoice === "rock") {
      //     cScore++;
      //     return "You lose";
      //   } else if (computerChoice === "paper") {
      //     pScore++;
      //     return "You win";
      //   }
      // }
    }
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //Call all the inner functions
  startGame();

  //
};

//Start the game function

game();
