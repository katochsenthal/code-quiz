var highScores = document.getElementsByClassName("high-score");
var timer = document.getElementById("timer");
var startScreen = document.getElementById("startScreen");
var startBtnEl = document.getElementById("start-btn");
var quizEl = document.getElementById("quiz");
var quizAnswers = document.getElementById("answerOptions");
var saveScores = document.getElementById("saveScores");
var highScoresBtn = document.getElementById("highScores");
var goBackBtn = document.getElementById("goBack");
var clearScoresBtn = document.getElementById("clearScores");
var questionEl = document.getElementById("question");
var userScore = document.getElementById("score");
var scores = document.getElementById("scores");

var highScoreInput = [];
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
    answerOptions.children[i].children[0].textContent =
      questions[currentQuestion].choices[i];
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
  startScreen.appendChild(messHr);
  startScreen.appendChild(messEl);
  setTimeout(function () {
    messHr.remove();
    messEl.remove();
  }, 2000);
}

//hides element
function hide(el) {
  el.style.display = "none";
}

// display element
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

// // show highscoresTitle in  local storage
// function renderHighScores() {
//   scores.innerHTML = "";
// var highScores = document.getElementsByClassName("high-score");
// show(highScores);
//   highScores = JSON.parse(localStorage.getItem("scores"));
//   for(var i =0; i<highScores.length; i++){

//   }

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
