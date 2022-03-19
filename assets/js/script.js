var startScreen = document.getElementById("startScreen");
var startButton = document.getElementById("startBtn");
var myQuestions = [
  {
    question: "Commonly used data types do NOT include:",
    answers: {
      a: "Strings",
      b: "Booleans",
      c: "Alerts",
      d: "Numbers",
    },
    correctAnswer: "c",
  },
  {
    question: "The condition in an if/else statement is enclosed in:",
    answers: {
      a: "Quotes",
      b: "Parenthesis",
      c: "Curly Brackets",
      d: "Square Brackets",
    },
    correctAnswer: "b",
  },
  {
    question: "Arrays in JavaScript can be used to store:",
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: {
      a: "Numbers and Strings",
      b: "Other Arrays",
      c: "Boolean",
      d: "all of the above",
    },
    correctAnswer: "d",
  },
  {
    question:
      "String values must be enclosed within __ when being assigned to variables",
    answers: {
      a: "Commas",
      b: "Curly Brackets",
      c: "Quotes",
      d: "Parenthesis",
    },
    correctAnswer: "c",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      a: "JavaScript",
      b: "Console.Log",
      c: "Terminal Bash",
      d: "for loops",
    },
    correctAnswer: "b",
  },
];

var questionContainer = document.getElementById("question-container");

startButton.addEventListener("click", startGame);

// start game function
function startGame() {
  // hiding the start screen
  this.parentElement.style.display = "none";

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
}

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
