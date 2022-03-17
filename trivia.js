//the variables we will be using for this project
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const scorePoints = 10;
const totalQuestions = 10;
let currentQuestion = {};
let correctAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//the movie list and answer list in an array
let questions = [
  {
    question: "Avatar(2009)",
    choice1: "6.5",
    choice2: "7.9",
    choice3: "5.9",
    choice4: "8.7",
    answer: 2,
  },
  {
    question: "Manos: Hands of Fate(1966)",
    choice1: "9.5",
    choice2: "5.5",
    choice3: "1.9",
    choice4: "4.2",
    answer: 3,
  },
  {
    question: "Titanic(1997)",
    choice1: "7.9",
    choice2: "8.8",
    choice3: "6.2",
    choice4: "5.0",
    answer: 1,
  },
  {
    question: "Avengers: End Game (2019)",
    choice1: "9.5",
    choice2: "8.4",
    choice3: "7.7",
    choice4: "6.9",
    answer: 2,
  },
  {
    question: "Forrest Gump(1994)",
    choice1: "8.8",
    choice2: "7.7",
    choice3: "6.6",
    choice4: "5.5",
    answer: 1,
  },
  {
    question: "The Lion King(1994)",
    choice1: "9.1",
    choice2: "6.2",
    choice3: "8.4",
    choice4: "7.4",
    answer: 3,
  },
  {
    question: "Gladiator(2000)",
    choice1: "8.5",
    choice2: "7.1",
    choice3: "9.4",
    choice4: "5.9",
    answer: 1,
  },
  {
    question: "The Godfather(1972)",
    choice1: "6.1",
    choice2: "9.2",
    choice3: "8.4",
    choice4: "7.7",
    answer: 2,
  },
  {
    question: "Office Space(1999)",
    choice1: "8.5",
    choice2: "5.2",
    choice3: "6.4",
    choice4: "7.7",
    answer: 4,
  },
  {
    question: "Anchorman: The Legend Of Ron Burgundy(2004)",
    choice1: "7.1",
    choice2: "6.3",
    choice3: "5.0",
    choice4: "8.2",
    answer: 1,
  },
  {
    question: "Star Wars(1977)",
    choice1: "10.0",
    choice2: "8.6",
    choice3: "7.7",
    choice4: "4.4",
    answer: 2,
  },
  {
    question: "Justice League(2017)",
    choice1: "8.5",
    choice2: "6.1",
    choice3: "5.0",
    choice4: "7.1",
    answer: 2,
  },
  {
    question: "The Lord of the Rings: The Fellowship of the Ring(2001)",
    choice1: "6.7",
    choice2: "9.6",
    choice3: "7.9",
    choice4: "8.9",
    answer: 4,
  },
  {
    question: "Singing in the Rain(1952)",
    choice1: "6.5",
    choice2: "8.3",
    choice3: "7.1",
    choice4: "5.9",
    answer: 2,
  },
  {
    question: "Twilight(2008)",
    choice1: "7.9",
    choice2: "1.0",
    choice3: "5.1",
    choice4: "6.5",
    answer: 3,
  },
  {
    question: "The Matrix(1999)",
    choice1: "9.4",
    choice2: "7.7",
    choice3: "8.7",
    choice4: "6.1",
    answer: 3,
  },
  {
    question: "Harry Potter and the Sorcerer's Stone(2001)",
    choice1: "6.3",
    choice2: "8.4",
    choice3: "5.2",
    choice4: "7.6",
    answer: 4,
  },
];


//the functions to run the game
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};


//A function that sends the user to the end game page once the game is over.
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= totalQuestions) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("endgame.html");
  }

  //This is a question progress bar that fills up as the user answers more questions
  questionCounter++;
  progressText.innerHTML = `Question ${questionCounter} of ${totalQuestions}`;
  progressBarFull.style.width = `${(questionCounter / totalQuestions) * 100}%`;
  //This randomizes the questions that were created
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionIndex, 1);

  correctAnswer = true;

  console.log("true");
};

//This will be the function that allows for clicking the answer for the question to see if it is correct or incorrect
//I want to implement a color cue for if the question is right or wrong.
//There is also a timeout function to move onto the next question (not sure if it'll stay yet)

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!correctAnswer) return;

    correctAnswer = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(scorePoints);
    }
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 2000);
    console.log("working");
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();

//popup = modal / alert
// popup via alert =simple
// popup via modal =more complex but more customization
//
//everytime we click the answer we get the popup to appear with the trivia fact
//
//we can make this only the correct answer as well
//
