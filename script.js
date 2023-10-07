/* eslint-disable no-param-reassign */
// We first need to create a variable to store the random number

let secreteNumber = Math.trunc(Math.random() * 20) + 1;

// We need a score variable and convert it to a number
let score = +document.querySelector('.score').textContent;

let highscore = 0;

console.log(typeof score, secreteNumber);

// Lets add an event listener for a keypress too

document.querySelector('.guess').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    document.querySelector('.check').click();
  }
});

//  Helper function

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

// Adding an event listener to the check button

document.querySelector('.check').addEventListener('click', () => {
  // Variable here to get the guess from the form input
  const guess = +document.querySelector('.guess').value;

  console.log(typeof guess);

  //  Lets check if guess number exists

  /*

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number';
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('.box').style.backgroundColor = '#60b347';

    //  need to select all the buttons and change the border color
    const allBtns = document.querySelectorAll('.btn');

    // loop through each button element and apply the style
    allBtns.forEach((btn) => {
      const newBorderColor = '3px solid #000';
      btn.style.border = newBorderColor;
    });

    if (score > 1) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔ Too High';
      document.querySelector('.guess').value = 'none';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '⛔ No More Guesses';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔ Too Low';
      document.querySelector('.guess').value = 'none';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '⛔ No More Guesses';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }

  */

  //   Refactoring the above code

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secreteNumber) {
    displayMessage('✅ Correct Number');
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('.box').style.backgroundColor = '#60b347';

    //  Need to select all the buttons and change the border color
    const allBtns = document.querySelectorAll('.btn');

    // Loop through each button element and apply the style
    allBtns.forEach((btn) => {
      const newBorderColor = '3px solid #000';
      btn.style.border = newBorderColor;
    });

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secreteNumber && score > 1) {
    //  Refactor the code using a ternary operator
    guess > secreteNumber
      ? displayMessage('⛔ Too High')
      : displayMessage('⛔ Too Low');

    score--;
    document.querySelector('.score').textContent = score;
  }
});

// Adding an event listener to the again button

document.querySelector('.again').addEventListener('click', () => {
  // Need to randomise the secreteNumber
  secreteNumber = Math.trunc(Math.random() * 20) + 1;

  console.log(typeof score, secreteNumber);

  score = 20;

  document.querySelector('.box').style.backgroundColor = '#222';
  //  Need to select all the buttons and change the border color

  const allBtns = document.querySelectorAll('.btn');

  // Loop through each button element and apply the style

  allBtns.forEach((btn) => {
    const newBorderColor = '3px solid limegreen';
    btn.style.border = newBorderColor;
  });

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
});
