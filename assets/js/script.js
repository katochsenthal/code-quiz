var startScreen = document.getElementById("startScreen");
var startButton = document.getElementById("startBtn");

// question div's
var question1 = document.querySelector(".question-1");
var question2 = document.querySelector(".question-2");
var question3 = document.querySelector(".question-3");
var question4 = document.querySelector(".question-4");
var question5 = document.querySelector(".question-5");
var initialForm = document.querySelector(".saveInitials");

question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";
initialForm.style.display = "none";

var timeLeft = 30;

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
  initialForm.style.display = "none";

  // Timer function
  timeLeft;
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
}

var answerOptions1 = document.querySelector(".answerOptions-1");

answerOptions1.addEventListener("click", function () {
  question1.style.display = "none";
  question2.style.display = "block";
  question3.style.display = "none";
  question4.style.display = "none";
  question5.style.display = "none";
  initialForm.style.display = "none";
});

var answerOptions2 = document.querySelector(".answerOptions-2");

answerOptions2.addEventListener("click", function () {
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "block";
  question4.style.display = "none";
  question5.style.display = "none";
  initialForm.style.display = "none";
});

var answerOptions3 = document.querySelector(".answerOptions-3");

answerOptions3.addEventListener("click", function () {
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "none";
  question4.style.display = "block";
  question5.style.display = "none";
  initialForm.style.display = "none";
});

var answerOptions4 = document.querySelector(".answerOptions-4");

answerOptions4.addEventListener("click", function () {
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "none";
  question4.style.display = "none";
  question5.style.display = "block";
  initialForm.style.display = "none";
});

var answerOptions5 = document.querySelector(".answerOptions-5");

answerOptions5.addEventListener("click", function () {
  // if any options are clicked, return the save scores screen
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "none";
  question4.style.display = "none";
  question5.style.display = "none";
  initialForm.style.display = "block";
});

// questions displayed
function nextQuestion() {}

// when a answer is chosen
function selectAnswer() {}

// save scores
function saveScores() {}

// if statement to stop the timer when all the questions are answered
// and time runs out before

if (timeLeft === 0) {
  // show game over screen
  console.log("gameover");
}

// Storage
var saveHighScores = function () {
  localStorage.setItem("", JSON.stringify());
};

var loadHighScores = function () {
  var savedHighScores = localStorage.getItem("");
  // if there are no tasks, set tasks to an empty array and return out of the function
  if (!savedHighScores) {
    return false;
  }
  console.log("Saved high scores!");
  // else, load up saved tasks

  // parse into array of objects
  savedHighScores = JSON.parse(savedHighScores);

  // loop through savedTasks array
  for (var i = 0; i < savedHighScores.length; i++) {
    // pass each task object into the `createTaskEl()` function
    createTaskEl(savedHighScores[i]);
  }
};

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
