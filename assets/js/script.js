var startScreen = document.getElementById("startScreen");
var startButton = document.getElementById("startBtn");

// question div's
var question1 = document.querySelector(".question-1");
var question2 = document.querySelector(".question-2");
var question3 = document.querySelector(".question-3");
var question4 = document.querySelector(".question-4");
var question5 = document.querySelector(".question-5");

question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";

startButton.addEventListener("click", startGame);

// start game function
function startGame() {
  // hiding the start screen
  this.parentElement.style.display = "none";

  question1.style.display = "block";
  question2.style.display = "none";
  question3.style.display = "none";
  question4.style.display = "none";
  question5.style.display = "none";

  // Timer function
  var timeLeft = 30;
  var elem = document.getElementById("timer");

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      saveScores();
    } else {
      elem.innerHTML = "Time :" + timeLeft;
      +"seconds";
      timeLeft--;
    }
  }
  questionsContainer.style.display = "block";
}

var answerOptions1 = document.querySelector(".answerOptions-1");

answerOptions1.addEventListener("click", function () {
  question1.style.display = "none";
  question2.style.display = "inline";
  question3.style.display = "none";
  question4.style.display = "none";
  question5.style.display = "none";
});

var answerOptions2 = document.querySelector(".answerOptions-2");

answerOptions2.addEventListener("click", function () {
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "block";
  question4.style.display = "none";
  question5.style.display = "none";
});

var answerOptions3 = document.querySelector(".answerOptions-3");

answerOptions3.addEventListener("click", function () {
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "none";
  question4.style.display = "block";
  question5.style.display = "none";
});

var answerOptions4 = document.querySelector(".answerOptions-4");

answerOptions4.addEventListener("click", function () {
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "none";
  question4.style.display = "none";
  question5.style.display = "block";
});

var answerOptions5 = document.querySelector(".answerOption-5");

answerOptions5.addEventListener("click", function () {
  // if any options are clicked, return the save scores screen
});

// questions displayed
function nextQuestion() {}

// when a answer is choosen
function selectAnswer() {}

// save scores
function saveScores() {}

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
