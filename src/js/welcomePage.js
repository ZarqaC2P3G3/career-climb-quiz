// const quizBrief = ``

document.addEventListener("DOMContentLoaded", (event) => {
  const usernameContainer = document.getElementById("userName");
  const positionContainer = document.getElementById("position");
  const positionBriefContainer = document.getElementById("positionBrief");
  const quizImage = document.getElementById("quizImage");
  const startButton = document.getElementById("startQuiz");
  let user = JSON.parse(sessionStorage.getItem("loggedInUser"));
  let dropShadowColor;
  if (user.selectedValue === "HTML") {
    dropShadowColor = "rgb(228, 77, 38)";
  } else if (user.selectedValue === "CSS") {
    dropShadowColor = "rgb(31, 98, 174)";
  } else {
    dropShadowColor = "rgb(246, 241, 177)";
  }
  usernameContainer.textContent = user.name;
  positionContainer.textContent = user.selectedValue;
  console.log(user.selectedValue);
  quizImage.setAttribute(
    "src",
    `./../../../img/${user.selectedValue}-logo-new.png`
  );
  quizImage.style.boxShadow = `: 0 0 100px ${dropShadowColor};`;
  positionBriefContainer.textContent = `The ${user.selectedValue} Multiple Choice Quiz is a web-based platform designed to test your knowledge of ${user.selectedValue}. The quiz features a series of multiple-choice questions, covering various topics such as syntax, data types, functions, and more. The questions range in difficulty from beginner to advanced, allowing users to test their skills at various levels.`;

  startButton.addEventListener("click", (event) => {
    if (sessionStorage.getItem("questionData")) {
      sessionStorage.removeItem("questionData");
    }
    if (sessionStorage.getItem("score")) {
      sessionStorage.removeItem("score");
    }
    if (sessionStorage.getItem("userAnswers")) {
      sessionStorage.removeItem("userAnswers");
    }
  });
});
