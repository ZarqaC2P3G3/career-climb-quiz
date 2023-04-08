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
  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    window.location.href = "../Results Page/results_Fail.html";
  }
}, 1000);

function startQuiz() {
  // start the quiz
  timerInterval;
}
