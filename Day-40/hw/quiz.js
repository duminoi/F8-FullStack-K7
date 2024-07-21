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
let countdown = 11;
let countTimer;
let lastPage;
let dataQuiz;
const apiUrl = "https://kqgsvq-8080.csb.app";

const params = {
  _limit: 1,
  _page: 1,
};
const data = {
  totalRecords: "1",
  totalPages: "1",
};

const getQuiz = async (params) => {
  let query = new URLSearchParams(params).toString();
  if (query) {
    query = "?" + query;
  }
  const response = await fetch(`${apiUrl}/quizs/${query}`);
  const quizs = await response.json();
  console.log(response.ok);
  data.totalRecords = response.headers.get("x-total-count");
  data.totalPages = Math.ceil(data.totalRecords / params._limit);
  data.recordNumber = quizs.length;
  console.log(quizs);
  renderQuestion(quizs);
  if (+params._page > +data.totalPages) {
    initial();
    displayContainer.classList.add("hide");
    startButton.classList.add("hide");
    scoreContainer.classList.remove("hide");
  }
  clearInterval(countTimer);
  countTimer = setInterval(() => {
    countdown--;
    timeLeft.innerHTML = `${countdown} s`;
    if (countdown < 1) {
      params._page++;
      getQuiz(params);
      initial();
    }
  }, 1000);
  dataQuiz = quizs[0];
  checker();
};

const renderQuestion = (quizs) => {
  countOfQuestion.innerHTML = `${params._page} of ${data.totalPages} questions`;
  quizContainer.innerHTML = `
        ${quizs
          .map(({ question, options, correct }) => {
            return `<div class="question">${question}</div>
                ${options
                  .map((option, index) => {
                    return `<div class="option-div data-id=${index}">${option}</div>`;
                  })
                  .join("")}
          `;
          })
          .join("")}
      `;
};

const handleClickAnswer = (e) => {
  if (e.target.classList.contains("option-div")) {
    initial();
    let result = e.target.innerText;
    if (result === dataQuiz.correct) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("incorrect");
    }
    params._page = params._page + 1;
    console.log(params._page);
    getQuiz(params);
  }
  quizContainer.removeEventListener("click", handleClickAnswer);
};
const checker = () => {
  quizContainer.addEventListener("click", handleClickAnswer);
};

const addEventRestart = () => {
  restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
    params._page = 1;
    getQuiz(params);
  });
};

const initial = () => {
  countdown = 11;
  clearInterval(countdown);
};

addEventRestart();
getQuiz(params);
