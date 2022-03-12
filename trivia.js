//the variables we will be using for this project
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const score_points = 10;
const total_questions = 10;
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
    answer: "7.9",
  },
  {
    question: "Manos: Hands of Fate(1966)",
    choice1: "9.5",
    choice2: "5.5",
    choice3: "1.9",
    choice4: "4.2",
    answer: "1.9",
  },
  {
    question: "Titanic(1997)",
    choice1: "7.9",
    choice2: "8.8",
    choice3: "6.2",
    choice4: "5.0",
    answer: "7.9",
  },
  {
    question: "Avengers: End Game (2019)",
    choice1: "9.5",
    choice2: "8.4",
    choice3: "7.7",
    choice4: "6.9",
    answer: "8.4",
  },
  {
    question: "Forrest Gump(1994)",
    choice1: "8.8",
    choice2: "7.7",
    choice3: "6.6",
    choice4: "5.5",
    answer: "8.8",
  },
  {
    question: "The Lion King(1994)",
    choice1: "9.1",
    choice2: "6.2",
    choice3: "8.4",
    choice4: "7.4",
    answer: "8.4",
  },
  {
    question: "Gladiator(2000)",
    choice1: "8.5",
    choice2: "7.1",
    choice3: "9.4",
    choice4: "5.9",
    answer: "8.5",
  },
  {
    question: "The Godfather(1972)",
    choice1: "6.1",
    choice2: "9.2",
    choice3: "8.4",
    choice4: "7.7",
    answer: "9.2",
  },
  {
    question: "Office Space(1999)",
    choice1: "8.5",
    choice2: "5.2",
    choice3: "6.4",
    choice4: "7.7",
    answer: "7.7",
  },
  {
    question: "Anchorman: The Legend Of Ron Burgundy(2004)",
    choice1: "7.1",
    choice2: "6.3",
    choice3: "5.0",
    choice4: "8.2",
    answer: "7.1",
  },
  {
    question: "Star Wars(1977)",
    choice1: "10",
    choice2: "8.6",
    choice3: "7.7",
    choice4: "4.4",
    answer: "8.6",
  },
  {
    question: "Justice League(2017)",
    choice1: "8.5",
    choice2: "6.1",
    choice3: "5.0",
    choice4: "7.1",
    answer: "6.1",
  },
  {
    question: "The Lord of the Rings: The Fellowship of the Ring(2001)",
    choice1: "6.7",
    choice2: "9.6",
    choice3: "7.9",
    choice4: "8.9",
    answer: "8.9",
  },
  {
    question: "Singing in the Rain(1952)",
    choice1: "6.5",
    choice2: "8.3",
    choice3: "7.1",
    choice4: "5.9",
    answer: "8.3",
  },
  {
    question: "Twilight(2008)",
    choice1: "7.9",
    choice2: "1.0",
    choice3: "5.1",
    choice4: "6.5",
    answer: "5.1",
  },
  {
    question: "The Matrix(1999)",
    choice1: "9.4",
    choice2: "7.7",
    choice3: "8.7",
    choice4: "6.1",
    answer: "8.7",
  },
  {
    question: "Harry Potter and the Sorcerer's Stone(2001)",
    choice1: "6.3",
    choice2: "8.4",
    choice3: "7.6",
    choice4: "4.9",
    answer: "7.6",
  },
];
