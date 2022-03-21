// 1st page
var startScreenEl = document.querySelector("#startScreen");
var startBtnEl = document.querySelector("#startQuiz");

var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector("#question");
var quizAnswersEl = document.querySelector("#answers");
var saveScoresEl = document.querySelector("#saveScores");
var initialsEl = document.querySelector("#initials");
var submitInitialsEl = document.querySelector("#submitInitials");
var viewHScoresBtnEl = document.querySelector("#viewHScores");
var goBackBtnEl = document.querySelector("#goBack");
var clearScoresBtnEl = document.querySelector("#clearScores");

var userScoreEl = document.querySelector("#score");
var scoresEl = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var highScoresEl = document.querySelector("#highScores");

var highScores = [];
var score = 0;
var currentQ = 0;
var totalTime = 75;
var timePassed = 0;
var interval;

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

function startTimer() {
  timerEl.textContent = totalTime;
  interval = setInterval(function () {
    timePassed++;
    timerEl.textContent = totalTime - timePassed;
    if (timePassed >= totalTime) {
      currentQ = questions.length;
      nextQuestion();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function nextQuestion() {
  currentQ++;
  if (currentQ < questions.length) {
    showQuestion();
  } else {
    stopTimer();
    if (totalTime - timePassed > 0);
    score += totalTime - timePassed;
    userScore.textContent = score;
    hide(quizEl);
    show(saveScoresEl);
    timerEl.textContent = 0;
  }
}

// check question's answers

function checkAnswer(answer) {
  if (questions[currentQ].answer == questions[currentQ.choices[answer.id]]) {
    score += 5;
    showMessage("correct!");
  } else {
    timePassed += 10;
    showMessage("wrong");
  }
}

// message displayed upon correct and wrong choice
function showMessage(message) {
  var messHr = document.createElement("hr");
  var messEl = document.createElement("div");
  messEl.textContent = message;
  document.querySelector(".jumbotron").appendChild(messHr);
  document.querySelector(".jumbotron").appendChild(messEl);
  setTimeout(function () {
    messHr.remove();
    messEl.remove();
  }, 2000);
}

//hides element
function hide(element) {
  element.style.display = "none";
}

// displays element
function show(element) {
  element.style.display = "block";
}

// reset

function reset() {
  score = 0;
  currentQ = 0;
  timePassed = 0;
  timerEl.textContent = 0;
}

function showQuestion() {
  questionEl.textContent = questions[currentQ].question;
  for (var i = 0; i < answerOptions.children.length; i++) {
    quizAnswersEl.children[i].children[0].textContent = `${i + 1}: ${
      questions[currentQ].choices[i]
    }`;
  }
}

// high scores stores in local storage

function showHighScores() {
  scoresEl.innerHTML = "";
  show(highScoresEl);
  highScores = JSON.parse(localStorage.getItem("scores"));
  for (let i = 0; i < hightScores.length; i++) {
    var scoreItem = document.createElement("div");
    scoreItem.className += "row";
    console.log(scoreItem);
    scoreItem.setAttribute("style", "background-color:pink;");
    scoreItem.textContent = `${i + 1}. ${highScores[i].username} - ${
      highScores[i].userScore
    }`;
    scoresEl.appendChild(scoreItem);
  }
}

viewHScoresBtnEl.addEventListener("click", function () {
  hide(startScreenEl);
  hide(quizEl);
  hide(saveScoresEl);
  showHighScores();
  stopTimer();
  reset();
});

startBtnEl.addEventListen("click", function () {
  hide(startScreenEl);
  startTimer();
  showQuestion();
  show(quizEl);
});

quizAnswersEl.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
    checkAnswer(e.target);
    nextQuestion();
  }
});

submitInitialsEl.addEventListener("click", function () {
  var initValue = initialsEl.value.trim();
  if (initValue) {
    var userScore = { username: initValue, userScore: score };
    initialsEl.value = "";
    highScores = JSON.parse(localStorage.getItem("scores")) || [];
    highScores.push(userScore);
    localStorage.setItem("scores", JSON.stringify(highScores));
    hide(saveScoresEl);
    showHighScores();
    reset();
  }
});

goBackBtnEl.addEventListener("click", function () {
  hide(saveScoresEl);
  show(startScreenEl);
});

clearScoresBtnEl.addEventListener("click", function () {
  highScores = [];
  localStorage.removeItem("scores", JSON.stringify(highScores));
  showHighScores();
});
