var startScreen = document.getElementById("startScreen");
var startBtnEl = document.getElementById("start-btn");
var quizEl = document.getElementById("quiz");
var quizAnswers = document.getElementById("answerOptions");
var saveScores = document.getElementById("saveScores");
var initial = document.getElementById("initials");
var submitInitial = document.getElementById("submitInitials");
var highScoresBtn = document.getElementById("highScores");
var goBackBtn = document.getElementById("goBack");
var clearScoresBtn = document.getElementById("clearScores");
var questionEl = document.getElementById("question");
var userScore = document.getElementById("score");
var scoresEl = document.getElementById("scores");
var timer = document.getElementById("timer");
var highScores = document.getElementsById("high-score");

var highScores = [];
var initials = "";
var currentQuestion = 0;
var totalTime = 75;
var timePassed = 0;
var score = 0;
var interval;

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

function startTimer() {
  timer.textContent = totalTime;
  interval = setInterval(function () {
    timePassed++;
    timer.textContent = totalTime - timePassed;
    if (timePassed >= totalTime) {
      currentQuestion = questions.length;
      nextQuestion();
    }
  }, 1000);
}

function showQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
  for (var i = 0; i < answerOptions.children.length; i++) {
    answerOptions.children[i].children[0].textContent = `${i + 1}: ${
      questions[currentQuestion].choices[i]
    }`;
  }
}

function stopTimer() {
  clearInterval(interval);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    stopTimer();
    if (totalTime - timePassed > 0) score += totalTime - timePassed;
    userScore.textContent = score;
    hide(quizEl);
    show(saveScores);
    timer.textContent = 0;
  }
}

// check question's answers

function checkAnswer(answer) {
  if (
    questions[currentQuestion].answer ==
    questions[currentQuestions.choices[answer.id]]
  ) {
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
function hide(el) {
  el.style.display = "none";
}

// displays element
function show(element) {
  el.style.display = "block";
}

// reset

function reset() {
  score = 0;
  currentQuestion = 0;
  timePassed = 0;
  timer.textContent = 0;
}

// high scores stores in local storage

function showHighScores() {
  scoresEl.innerHTML = "";
  show(highScores);
  high_Scores = JSON.parse(localStorage.getItem("scores"));
  for (let i = 0; i < hight_Scores.length; i++) {
    var scoreItem = document.createElement("div");
    scoreItem.className += "row";
    scoreItem.setAttribute("style", "background-color:yellow;");
    scoreItem.textContent = `${i + 1}. ${high_Scores[i].username} - ${
      high_Scores[i].userScore
    }`;
    scoresEl.appendChild(scoreItem);
  }
}

highScoresBtn.addEventListener("click", function () {
  hide(startScreen);
  hide(quizEl);
  renderHighScores();
  stopTimer();
  reset();
});

startBtnEl.addEventListen("click", function () {
  hide(startScreen);
  startTimer();
  showQuestion();
  show(quizEl);
});

quizAnswers.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    checkAnswer(e.target.value);
    nextQuestion();
  }
});

submitInitial.addEventListener("click", function () {
  var initValue = initial.value.trim();
  if (initValue) {
    var userScore = { username: initValue, userScore: score };
    initial.value = "";
    highScores = JSON.parse(localStorage.getItem("scores")) || [];
    highScores.push(userScore);
    localStorage.setItem("scores", JSON.stringify(highScores));
    hide(saveScores);
    showHighScores();
    reset();
  }
});

goBackBtn.addEventListener("click", function () {
  hide(saveScores);
  show(startScreen);
});

clearScoresBtn.addEventListener("click", function () {
  saveScores = [];
  localStorage.removeItem("scores", JSON.stringify(saveScores));
  showHighScores();
});
