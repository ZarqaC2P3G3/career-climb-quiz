document.addEventListener("DOMContentLoaded", (event) => {
  const userScore = JSON.parse(sessionStorage.getItem("score"));
  const userAnswers = JSON.parse(sessionStorage.getItem("userAnswers"));
  const questionData = JSON.parse(sessionStorage.getItem("questionData"));
  const answerReviewContainer = document.getElementById("accordionExample");

  const answerReviewItem = `<div class="accordion-item">
  <h2 class="accordion-header" id="headingOne">
  <button class="accordion-button" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Question Number 1
      </button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <strong>Question Title</strong>
          <br>
          <span>Answer: b Answer body</span>
      </div>
  </div>
</div>`;

  document.getElementById("finalScore").textContent = `${Math.floor(
    (userScore / 10) * 100
  )}%`;

  document.getElementById("correctAnswers").textContent = `${userScore}/10`;

  questionData.forEach((element, index) => {
    let correct;
    if (+questionData[index].questionAnswer === +userAnswers[index] - 1) {
      correct = true;
      console.log(+questionData[index].questionAnswer, +userAnswers[index]);
    } else {
      console.log(+questionData[index].questionAnswer, +userAnswers[index]);
      correct = false;
    }

    answerReviewContainer.innerHTML += `<div class="accordion-item">
    <h2 class="accordion-header" id="heading${index + 1}">
    <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse${
              index + 1
            }" aria-expanded="true" aria-controls="collapse${index + 1}">
            Question Number ${index + 1}
        </button>
    </h2>
    <div id="collapse${
      index + 1
    }" class="accordion-collapse collapse show" aria-labelledby="heading${
      index + 1
    }"
        data-bs-parent="#accordionExample">
        <div class="accordion-body bg-${correct ? "success" : "danger"}">
            <strong>${element.questionTitle}</strong>
            <br>
            <span>Answer: ${element.questionAnswerText}</span>
        </div>
    </div>
  </div>`;
  });

  console.log(questionData);
});
