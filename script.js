// We first need to create a variable to store the random number

const secreteNumber = Math.trunc(Math.random() * 20) + 1;

// We need a score variable
let score = document.querySelector(".score").value;

// Lets add an event listener to the check button

document.querySelector(".check").addEventListener("click", function () {
  // Variable here to get the guess from the form input
  const guess = document.querySelector(".guess").value;

  //  Lets check if guess number exists
  if (!guess) document.querySelector(".message").textContent = "⛔ No Number";

  if (guess === secreteNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "✅ Correct Number";
    } else if (guess > secreteNumber) {
      document.querySelector(".message").textContent = "⬆️ Too High";
      score--;
      document.querySelector(".score").value = score;
    }
  }
});
