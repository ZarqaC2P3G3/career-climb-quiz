const signup = document.getElementById("signup");
const quiz = document.getElementById("quiz");

const quizzes = {
  javascriptQuiz: {
    questions: [
      {
        title: "What is JavaScript?",
        answers: {
          0: " JavaScript is a scripting language used to make the website interactive",
          1: "JavaScript is an assembly language used to make the website interactive",
          2: "JavaScript is a compiled language used to make the website interactive",
          3: "None of the mentioned",
        },
        correctAnswer: 0,
      },
      {
        title: "Which of the following is correct about JavaScript?",
        answers: {
          0: "JavaScript is an Object-Based language",
          1: "JavaScript is Assembly-language",
          2: "JavaScript is an Object-Oriented language",
          3: " JavaScript is a High-level language",
        },
        correctAnswer: 0,
      },
      {
        title:
          "Arrays in JavaScript are defined by which of the following statements?",
        answers: {
          0: "It is an ordered list of values",
          1: "It is an ordered list of objects",
          2: "It is an ordered list of string",
          3: "It is an ordered list of functions",
        },
        correctAnswer: 0,
      },
      {
        title:
          "Where is Client-side JavaScript code is embedded within HTML documents?",
        answers: {
          0: "A URL that uses the special javascript:code",
          1: "A URL that uses the special javascript:protocol",
          2: "A URL that uses the special javascript:encoding",
          3: "A URL that uses the special javascript:stack",
        },
        correctAnswer: 1,
      },
      {
        title: "Which of the following is correct about JavaScript?",
        answers: {
          0: "JavaScript is an Object-Based language",
          1: "JavaScript is Assembly-language",
          2: "JavaScript is an Object-Oriented language",
          3: " JavaScript is a High-level language",
        },
        correctAnswer: 0,
      },
      {
        title: "Which of the following is correct about JavaScript?",
        answers: {
          0: "JavaScript is an Object-Based language",
          1: "JavaScript is Assembly-language",
          2: "JavaScript is an Object-Oriented language",
          3: " JavaScript is a High-level language",
        },
        correctAnswer: 0,
      },
      {
        title: "Which of the following is correct about JavaScript?",
        answers: {
          0: "JavaScript is an Object-Based language",
          1: "JavaScript is Assembly-language",
          2: "JavaScript is an Object-Oriented language",
          3: " JavaScript is a High-level language",
        },
        correctAnswer: 0,
      },
      {
        title: "Which of the following is correct about JavaScript?",
        answers: {
          0: "JavaScript is an Object-Based language",
          1: "JavaScript is Assembly-language",
          2: "JavaScript is an Object-Oriented language",
          3: " JavaScript is a High-level language",
        },
        correctAnswer: 0,
      },
      {
        title: "Which of the following is correct about JavaScript?",
        answers: {
          0: "JavaScript is an Object-Based language",
          1: "JavaScript is Assembly-language",
          2: "JavaScript is an Object-Oriented language",
          3: " JavaScript is a High-level language",
        },
        correctAnswer: 0,
      },
      {
        title: "Which of the following is correct about JavaScript?",
        answers: {
          0: "JavaScript is an Object-Based language",
          1: "JavaScript is Assembly-language",
          2: "JavaScript is an Object-Oriented language",
          3: " JavaScript is a High-level language",
        },
        correctAnswer: 0,
      },
    ],
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

function calculateResult() {
  // [1,2,3,0,1]
  const answers = JSON.parse(sessionStorage.getItem("userAnswers"));
  answers.forEach((element, index) => {
    if (+element - 1 === quizzes.javascriptQuiz.questions[index].correctAnswer)
      score++;
  });
}

// signup.addEventListener("submit", (event) => {
//   event.preventDefault();

//   userInfo.userName = event.target.username;
//   userInfo.userEmail = event.target.useremail;
//   userInfo.userPassword = event.target.userpassword;
//   userInfo.userPosition = event.target.userposition;
// });

if (currentQuestion === 0) {
  document.getElementById("questionTitle").textContent =
    quizzes.javascriptQuiz.questions[currentQuestion].title;

  document.querySelectorAll(".form-check-label").forEach((element, index) => {
    element.textContent =
      quizzes.javascriptQuiz.questions[currentQuestion].answers[index];
  });
}

quiz.addEventListener("submit", (event) => {
  event.preventDefault();
  // if (currentQuestion === 0) {
  //   return;
  // }
  // console.log(event.target.exampleRadios.value);

  answers[currentQuestion] = event.target.exampleRadios.value;

  document.getElementById("questionTitle").textContent =
    quizzes.javascriptQuiz.questions[currentQuestion].title;

  document.querySelectorAll(".form-check-label").forEach((element, index) => {
    element.textContent =
      quizzes.javascriptQuiz.questions[currentQuestion].answers[index];
  });

  if (currentQuestion === 9) {
    document.getElementById("nextButton").classList.toggle("d-none");
    document.getElementById("submitButton").classList.toggle("d-none");
  }

  console.log(currentQuestion);

  currentQuestion++;
});

document.getElementById("submitLink").addEventListener("click", (e) => {
  e.preventDefault();
  sessionStorage.setItem("userAnswers", JSON.stringify(answers));
  calculateResult();

  if (Math.floor(score / 10) < 5 / 10) {
  }
});
