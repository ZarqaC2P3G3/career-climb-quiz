const timelimit = 300;
let timeRemaining = timelimit;

function updateTimerDisplay(timeRemaining) {
  const timerDisplay = document.getElementById('timer');
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerDisplay.textContent = `${minutes}m : ${seconds}s`;

}

const timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay(timeRemaining);
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      setTimeout(() => {
        window.location.href = "/Results Page/results_Fail.html"; // replace "next-page.html" with the URL of the next HTML page you want to navigate to
      }, 1000);
   
    }
  }, 1000);

  function startQuiz() {
    // start the quiz
    timerInterval;
  }