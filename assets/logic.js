// TODO: add game logic
// variables to keep track of quiz state
var currQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
//var q = 0;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
    
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;

  console.log(questions.length);
  if(timerId > 0 || questions.length > 0){
   console.log(questions);
  //clear choices
  currQuestionIndex++;
    getQ(currQuestionIndex);
  return;
  } else {
   quizEnd();
 }
}
startBtn.addEventListener('click',startQuiz);
var currQuestion;
var answer;
function getQ(currQuestIndex) {
    while (choicesEl.firstChild) {
        choicesEl.removeChild(choicesEl.firstChild);
    }
    var titleEl = document.getElementById("question-title");
    currQuestion = questions[currQuestIndex];
    titleEl.textContent = currQuestion.title;
    answer = currQuestion.answer;
    console.log(answer);
    currQuestion.choices.forEach(function(choice, i) {
        var myNewOption = document.createElement('button');
        myNewOption.textContent = i + 1 + ". " + choice;
        myNewOption.value = choice;
        choicesEl.appendChild(myNewOption);
        myNewOption.addEventListener('click',questionClick);
        currentQuestionIndex = currQuestIndex;
        console.log(this.textContent);
    });
    questions.length = questions.length - 1;
    
    var questions = [
      {
        questionText: "What is Mario's favorite color?",
        options: {
          a: "blue",
          b: "Red",
          c: "yellow",
          d: "green",
        },
        correctAnswer: "b",
      },
      {
        questionText: "What is Mario's favorite food",
        options: {
          a: "italian",
          b: "Mexican",
          c: "Chinese",
          d: "Thai",
        },
        correctAnswer: "a",
      },
      {
        questionText: "What Mario's favorite cocktail",
        options: {
          a: "cosmopolitan",
          b: "AMF",
          c: "Long island iced tea",
          d: "lemondrop",
        },
        correctAnswer: "b",
      },
    ];
    
    
}

function questionClick(e) {
    //console.log(e.target.value);
    if(e.target.value === answer && questions.length <= 0){
        console.log('Correct! Play again!');
        feedbackEl.textContent = 'Game Over!';
        endQuiz();
    }else if(e.target.value === answer){
        console.log('Correct!');
        getQ(currentQuestionIndex + 1);
    }else if(e.target.value !== answer && questions.length > 0){
        console.log('Wrong!');
        time = time - 10;
        getQ(currentQuestionIndex + 1);
    }else if(e.target.value !== answer && questions.length <= 0){
        console.log('Wrong!');
        feedbackEl.textContent = 'Game Over!';
        endQuiz();
    }else{
        console.log('end game');
    }
}

function endQuiz() {
    time = 0;
    clearInterval(timerId);
    timerEl.textContent = 0;
    console.log('Game over');
}

function clockTick() {
  time--;
  timerEl.textContent = time;
  
  // check if user ran out of time
  if (time <= 0) {
    endQuiz();
    time = 0;
    feedbackEl.textContent = 'Time up! Game Over!';
  }
}

function saveHighscore() {
      // get value of input box
  var initials = initialsEl.value.trim();

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

//user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;

// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceNode.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    // display new time on page
    timerEl.textContent = time;

    // play "wrong" sound effect
    sfxWrong.play();

    feedbackEl.textContent = "Wrong!";
  } else {
    // play "right" sound effect
    sfxRight.play();

    feedbackEl.textContent = "Correct!";
  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
  currentQuestionIndex++;

  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;