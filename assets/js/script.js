var startScreen = document.getElementById("startScreen");
var startButton = document.getElementById("startBtn");

var questionContainer = document.getElementById("question-container");

startButton.addEventListener("click", startGame);

// start game function
function startGame() {
  // hiding the start screen
  this.parentElement.style.display = "none";
}

// questions displayed
function nextQuestion() {}

// when a answer is choosen
function selectAnswer() {}

// save scores
function saveScores() {}

// Timer function
function timer() {
  var seconds = 30;

  var interval = setInterval(function () {
    document.querySelector("timerDisplay").innerHTML = "00:" + seconds;
    seconds--;

    if (seconds < 0) {
      clearInterval(interval);
      console.log("Ding!");
    }
  }, 1000);
}

// questions

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
