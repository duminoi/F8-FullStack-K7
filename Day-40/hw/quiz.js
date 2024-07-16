let timeLeft = document.querySelector(".time-left");
let quizContainer = document.querySelector(".container");
let nextBtn = document.querySelector("#next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.querySelector("#display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.querySelector("#restart");
let userScore = document.querySelector("#user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.querySelector("#start-button");
let option = document.querySelector(".option-div");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const apiUrl = "https://kqgsvq-8080.csb.app/";

const getQuiz = async () => {
  const response = await fetch(`${apiUrl}/quizs`);
  const quizs = await response.json();
  console.log(quizs);
};
