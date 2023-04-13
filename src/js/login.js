const form = document.getElementById("form");
const dropdownItems = document.querySelectorAll(".dropdown-item");
let positionError = document.getElementById("positionError");
let emailpassError = document.getElementById("emailPassError");

let users = [];
let valid = false;
let emailExists = false;
let passwordExists = false;
let selectedValue;
if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
}

dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    selectedValue = this.getAttribute("data-value");
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;
  let username;

  users.forEach((element) => {
    if (element.email == email && element.password == password) {
      username = element.name;
      valid = true;
    } else if (element.email == email && element.password != password) {
      emailExists = true;
    }
    console.log(email, element.email, password, element.password);
    console.log(valid);
  });
  if (!valid && emailExists) {
    emailpassError.style.display = "block";
  }

  if (!selectedValue) {
    positionError.style.display = "block";
  }

  if (valid && selectedValue) {
    // console.log(username, selectedValue);
    sessionStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        name: username,
        selectedValue: selectedValue,
      })
    );
    if (sessionStorage.getItem(`userAnswers${selectedValue}`)) {
      const score = JSON.parse(sessionStorage.getItem(`score${selectedValue}`));
      if (score > 5) {
        window.location.href = "/src/html/Results Page/resultsSuccess.html";
      } else {
        window.location.href = "/src/html/Results Page/resultsFail.html";
      }
    } else {
      window.location.href = "../welcome/welcomePage.html";
    }
  }

  form.reset();
});
