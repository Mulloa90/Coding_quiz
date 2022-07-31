const startBtn = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const questionEl = document.getElementById("questions");
const timerEl = document.getElementById("timer");
const correctSound = new Audio("assets/sfx/correct.wav");
const incorrectSound = new Audio("assets/sfx/incorrect.wav");
startBtn.addEventListener("click", startGame);

//Game variables
let score = 0;
let currentQuestion = 0;
let secondsRemaining = 5;
let timer;

function startGame() {
  //hide the start-screen
  startScreen.classList.add("hide");
  //Hydrate the questions
  renderQuestion();
  //show #questions
  questionEl.classList.remove("hide");
  //Hydrate timerEl, show timerEl, start the timer
  timerEl.textContent = `Time: ${secondsRemaining} seconds`;
  timerEl.classList.remove("hide");
  timer = setInterval(function () {
    secondsRemaining--;
    timerEl.textContent = `Time: ${secondsRemaining} seconds`;
    if (secondsRemaining <= 0) {
      endGame();
    }
  }, 1000);
}

function renderQuestion() {
  document.getElementById("question-title").textContent =
    questions[currentQuestion].title;
  const choices = questions[currentQuestion].choices;
  choices.forEach((choice) => {
    var button = document.createElement("button");
    button.addEventListener("click", function () {
      checkAnswer(choice);
    });
    button.textContent = choice;
    document.getElementById("choices").append(button);
  });
}
function checkAnswer(choice) {
  //evaluates whether answer is correct or incorrect
  if (choice === questions[currentQuestion].answer) {
    console.log("correct");
    correctSound.play();
  } else {
    console.log("incorrect");

    incorrectSound.play();
  }

  // sound effect and score
  // sound effect and lose time

  //transition to next question
}
function endGame() {
    clearInterval(timer)
    alert('game over')
  //stop the timer
  //hide #questions
  //show end-screen
}
