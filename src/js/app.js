const signup = document.getElementById("signup");
const quiz = document.getElementById("quiz");

const quizzes = {
  javascriptQuiz: {
    questions: [
      {
        title: "What is JavaScript?",
        answers: {
          1: " JavaScript is a scripting language used to make the website interactive",
          2: "JavaScript is an assembly language used to make the website interactive",
          3: "JavaScript is a compiled language used to make the website interactive",
          4: "None of the mentioned",
        },
        correctAnswer: 0,
      },
    ],
    estimatedTime: 500,
  },
};

const userInfo = {
  userName: "",
  userEmail: "",
  userPassword: "",
  userPosition: "",
};

let answers = [];
let currentQuestion = 0;
let score = 0;

function renderQuestion(container, question, answers) {
  container.querySelector("#title").textContent = question;
  container.querySelectorAll("#answers").forEach((answer, index) => {
    answer.textContent = answers[index];
  });
}

// signup.addEventListener("submit", (event) => {
//   event.preventDefault();

//   userInfo.userName = event.target.username;
//   userInfo.userEmail = event.target.useremail;
//   userInfo.userPassword = event.target.userpassword;
//   userInfo.userPosition = event.target.userposition;
// });

quiz.addEventListener("submit", (event) => {
  event.preventDefault();

  renderQuestion(
    quiz,
    quizzes[`${userPosition}Quiz`].questions[currentQuestion].title,
    quizzes[`${userPosition}Quiz`].questions[currentQuestion].answers
  );

  answers[currentQuestion] = event.target.answer;
  currentQuestion++;
});
