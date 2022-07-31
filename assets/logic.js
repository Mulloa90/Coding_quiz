const startBtn = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const questionEl = document.getElementById("questions");
const timerEl = document.getElementById("timer");

startBtn.addEventListener("click", startGame);

//Game variables
let score = 0;
let currentQuestion = 0;
let timer;

function startGame() {
  //hide the start-screen
  startScreen.classList.add("hide");
  //Hydrate the questions
  renderQuestion();
  //show #questions
  questionEl.classList.remove("hide");
  //start the timer and show the #timer
  timerEl.classList.remove("hide");
}

function renderQuestion() {
  document.getElementById("question-title").textContent =
    questions[currentQuestion].title;
  const choices = questions[currentQuestion].choices;
  choices.forEach((choice) => {
    var button = document.createElement("button");
    button.textContent = choice;
    document.getElementById("choices").append(button);
  });
}

function endGame() {
  //stop the timer
  //hide #questions
  //show end-screen
}
