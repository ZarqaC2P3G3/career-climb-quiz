const signup = document.getElementById("signup");
const quiz = document.getElementById("quiz");

const quizzes = {
  javascriptQuiz: {
    questions: [
      {
        title: "What is JavaScript?",
        answers: {
          0: "JavaScript is a scripting language used to make the website interactive",
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
          0: "It is an ordered list of string",
          1: "It is an ordered list of objects",
          2: "It is an ordered list of values",
          3: "It is an ordered list of functions",
        },
        correctAnswer: 3,
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
        title:
          " Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        answers: {
          0: "position",
          1: "window",
          2: "standard",
          3: "location",
        },
        correctAnswer: 1,
      },
      {
        title:
          "Which of the following methods/operation does javascript use instead of == and !=?",
        answers: {
          0: "JavaScript uses equalto()",
          1: "JavaScript uses equals() and notequals() instead",
          2: "JavaScript uses bitwise checking",
          3: "JavaScript uses === and !== instead",
        },
        correctAnswer: 3,
      },
      {
        title: "Why event handlers is needed in JS?",
        answers: {
          0: "Adds innerHTML page to the code",
          1: "Change the server location",
          2: " Allows JavaScript code to alter the behaviour of windows",
          3: "Performs handling of exceptions and occurrences",
        },
        correctAnswer: 2,
      },
      {
        title:
          " Which of the following is the property that is triggered in response to JS errors?",
        answers: {
          0: "onclick",
          1: "onerror",
          2: "onmessage",
          3: "onexception",
        },
        correctAnswer: 1,
      },
      {
        title: "Which of the following is not an error in JavaScript?",
        answers: {
          0: "Missing of Bracket",
          1: "Division by zero",
          2: "Syntax error",
          3: "Missing of semicolons",
        },
        correctAnswer: 1,
      },
      {
        title: " Which of the following is not a framework?",
        answers: {
          0: "JavaScript .NET",
          1: "jQuery",
          2: "Cocoa JS",
          3: "JavaScript",
        },
        correctAnswer: 3,
      },
    ],
  },

  htmlQuiz: {
    questions: [
      {
        title: "What is HTML?",
        answers: {
          0: "HTML describes the structure of a webpage",
          1: "HTML is the standard markup language mainly used to create web pages",
          2: "HTML consists of a set of elements that helps the browser how to view the content",
          3: "All of the mentioned",
        },
        correctAnswer: 3,
      },
      {
        title: "Who is the father of HTML?",
        answers: {
          0: "Rasmus Lerdorf",
          1: "Tim Berners-Lee",
          2: "Brendan Eich",
          3: "Sergey Brin",
        },
        correctAnswer: 1,
      },
      {
        title: "HTML stands for __________",
        answers: {
          0: "HyperText Markup Language",
          1: "HyperText Machine Language",
          2: "HyperText Marking Language",
          3: "HighText Marking Language",
        },
        correctAnswer: 0,
      },
      {
        title: "What is the correct syntax of doctype in HTML5?",
        answers: {
          0: "/doctype html",
          1: "doctype html",
          2: "doctype html!",
          3: "!doctype html",
        },
        correctAnswer: 3,
      },
      {
        title:
          "Which of the following is used to read an HTML page and render it?",
        answers: {
          0: "Web server",
          1: "Web network",
          2: "Web browser",
          3: "Web matrix",
        },
        correctAnswer: 2,
      },
      {
        title:
          "Which of the following is not a difference between HTML and XHTML?",
        answers: {
          0: "Charset in both html and xhtml is “text/html”",
          1: "JavaScript is Assembly-languageTags and attributes are case-insensitive in HTML but not in XHTML",
          2: "Special characters must be escaped using character entities in XHTML unlike HTML",
          3: "Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml”",
        },
        correctAnswer: 0,
      },
      {
        title:
          "Which of the following tag is used for inserting the largest heading in HTML?",
        answers: {
          0: "head",
          1: "h1",
          2: "h6",
          3: "heading",
        },
        correctAnswer: 1,
      },
      {
        title: "What is DOM in HTML?",
        answers: {
          0: "Language dependent application programming",
          1: "Hierarchy of objects in ASP.NET",
          2: "Application programming interface",
          3: " Convention for representing and interacting with objects in html documents",
        },
        correctAnswer: 3,
      },
      {
        title: "In which part of the HTML metadata is contained?",
        answers: {
          0: "head tag",
          1: "title tag",
          2: "html tag",
          3: "body tag",
        },
        correctAnswer: 0,
      },
      {
        title: "Which element is used to get highlighted text in HTML5?",
        answers: {
          0: "u",
          1: "mark",
          2: "highlight",
          3: "b",
        },
        correctAnswer: 1,
      },
    ],
  },

  cssQuiz: {
    questions: [
      {
        title: "What is CSS?",
        answers: {
          0: "CSS is a style sheet language",
          1: "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
          2: "CSS is the language used to style the HTML documents",
          3: "All of the mentioned",
        },
        correctAnswer: 3,
      },
      {
        title: "Which of the following tag is used to embed css in html page?",
        answers: {
          0: "css",
          1: "!DOCTYPE html",
          2: "script",
          3: "style",
        },
        correctAnswer: 3,
      },
      {
        title:
          "Which of the following CSS selectors are used to specify a group of elements?",
        answers: {
          0: "tag",
          1: "id",
          2: "class",
          3: "both class and tag",
        },
        correctAnswer: 2,
      },
      {
        title:
          "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        answers: {
          0: "HTML",
          1: "PHP",
          2: "CSS",
          3: "Ajax",
        },
        correctAnswer: 2,
      },
      {
        title:
          "Which of the following CSS framework is used to create a responsive design?",
        answers: {
          0: "django",
          1: "rails",
          2: "larawell",
          3: "bootstrap",
        },
        correctAnswer: 3,
      },
      {
        title:
          "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
        answers: {
          0: "tag",
          1: "id",
          2: "class",
          3: "both class and tag",
        },
        correctAnswer: 1,
      },
      {
        title:
          " Which of the following type of HTML tag is used to define an internal style sheet?",
        answers: {
          0: "script",
          1: "Link",
          2: "class",
          3: "style",
        },
        correctAnswer: 3,
      },
      {
        title:
          "Which of the following CSS property is used to make the text bold?",
        answers: {
          0: "text-decoration: bold",
          1: "font-weight: bold",
          2: "font-style: bold",
          3: "text-align: bold",
        },
        correctAnswer: 1,
      },
      {
        title:
          "Which of the following CSS style property is used to specify an italic text?",
        answers: {
          0: "style",
          1: "font",
          2: "font-style",
          3: "@font-face",
        },
        correctAnswer: 2,
      },
      {
        title:
          " Which of the following is the correct syntax to link an external style sheet in the HTML file?",
        answers: {
          0: "link rel=”stylesheet” href=”style.css”",
          1: "link rel=”stylesheet” src=”style.css” ",
          2: "style rel=”stylesheet” src=”style.css” ",
          3: "style rel=”stylesheet” link=”style.css” ",
        },
        correctAnswer: 0,
      },
    ],
  },
};

const timelimit = 300;
let timeRemaining = timelimit;

function updateTimerDisplay(timeRemaining) {
  const timerDisplay = document.getElementById("timer");
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerDisplay.textContent = `${minutes}m : ${seconds}s`;
}

const timerInterval = setInterval(() => {
  timeRemaining--;
  updateTimerDisplay(timeRemaining);
  sessionStorage.setItem("timeLeft", JSON.stringify(timelimit - timeRemaining));
  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    window.location.href = "../Results Page/resultsFail.html";
    sessionStorage.setItem(
      "timeRemaining",
      JSON.stringify(timelimit - timeRemaining)
    );
  }
}, 1000);

function startQuiz() {
  // start the quiz
  timerInterval;
}

const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

const userInfo = {
  userName: "",
  userEmail: "",
  userPassword: "",
  userPosition: loggedInUser.selectedValue.toLowerCase(),
};

let answers = [];
let currentQuestion = 0;
let score = 0;
let scoreData = [];

function renderQuestion(container, question, answers) {
  container.querySelector("#title").textContent = question;
  container.querySelectorAll("#answers").forEach((answer, index) => {
    answer.textContent = answers[index];
  });
}

function calculateResult() {
  // [1,2,3,0,1]
  const answersNew = JSON.parse(sessionStorage.getItem("userAnswers"));
  answers.forEach((element, index) => {
    if (
      +element - 1 ===
      quizzes[`${userInfo.userPosition}Quiz`].questions[index].correctAnswer
    )
      score++;
  });
}

if (currentQuestion === 0) {
  document.getElementById("questionTitle").textContent =
    quizzes[`${userInfo.userPosition}Quiz`].questions[currentQuestion].title;

  document.querySelectorAll(".form-check-label").forEach((element, index) => {
    element.textContent =
      quizzes[`${userInfo.userPosition}Quiz`].questions[
        currentQuestion
      ].answers[index];
  });

  currentQuestion += 1;
}

quiz.addEventListener("submit", (event) => {
  event.preventDefault();

  answers[currentQuestion - 1] = +event.target.exampleRadios.value;

  scoreData[currentQuestion - 1] = {
    questionTitle:
      quizzes[`${userInfo.userPosition}Quiz`].questions[currentQuestion - 1]
        .title,
    questionAnswer:
      quizzes[`${userInfo.userPosition}Quiz`].questions[currentQuestion - 1]
        .correctAnswer,
    questionAnswerText:
      quizzes[`${userInfo.userPosition}Quiz`].questions[currentQuestion - 1]
        .answers[+event.target.exampleRadios.value - 1],
  };

  if (currentQuestion !== 10) {
    document.getElementById("questionTitle").textContent =
      quizzes[`${userInfo.userPosition}Quiz`].questions[currentQuestion].title;

    document.querySelectorAll(".form-check-label").forEach((element, index) => {
      element.textContent =
        quizzes[`${userInfo.userPosition}Quiz`].questions[
          currentQuestion
        ].answers[index];
    });
  }

  document.getElementById("questionNumber").textContent = currentQuestion + 1;
  document.getElementById("progressBar").style.width = `${
    currentQuestion + 1
  }0%`;

  if (currentQuestion === 9) {
    document.getElementById("nextButton").textContent = "Submit";
  }

  event.target.exampleRadios.forEach((element) => (element.checked = false));

  sessionStorage.setItem("userAnswers", JSON.stringify(answers));
  sessionStorage.setItem("questionData", JSON.stringify(scoreData));
  if (currentQuestion === 10) {
    calculateResult();
    sessionStorage.setItem("score", `${score}`);
    if (score > 5) {
      window.location.href = "../Results Page/resultsSuccess.html";
    } else {
      window.location.href = "../Results Page/resultsFail.html";
    }
  }
  if (currentQuestion !== 10) {
    currentQuestion++;
  }
});
