"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 18;
// document.querySelector(".guess").value = 23;

let Secretnumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //If you a are nor right
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === Secretnumber) {
    document.querySelector(".number").textContent = Secretnumber;
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //If too low
  else if (guess !== Secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > Secretnumber ? "Too High" : "Too  Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose Genius!";
    }

    //   // if too high
    // } else if (guess > Secretnumber) {
    //   if (score >= 1) {
    //     document.querySelector(".message").textContent = "Too High";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "You Lose Genius!";
    //   }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  Secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = Secretnumber;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start Guessing";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
