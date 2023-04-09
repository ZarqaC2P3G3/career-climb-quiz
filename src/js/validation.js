const form = document.getElementById("signupForm");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let positionError = document.getElementById("positionError");
let checkboxError = document.getElementById("checkboxError");
let selectedValue;
const dropdownItems = document.querySelectorAll(".dropdown-item");
let loggedInUser;
let valid = true;
let exists = false;
let users = [];

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

  const name = e.target.username.value;
  const usernameRegex = /^\S+$/;
  if (!usernameRegex.test(name)) {
    nameError.style.display = "block";
    valid = false;
  } else {
    nameError.style.display = "none";
  }

  const password = e.target.password.value;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  if (!passwordRegex.test(password)) {
    passwordError.style.display = "block";
    valid = false;
  } else {
    passwordError.style.display = "none";
  }

  const email = e.target.email.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  users.forEach((element) => {
    if (element.email === email) {
      exists = true;
    }
  });

  const checkbox = e.target.checkbox.checked;
  if (checkbox === true) {
    checked = "checked";
    checkboxError.style.display = "none";
  } else {
    checkboxError.style.display = "block";
    checked = "error";
    valid = false;
  }

  if (selectedValue == null) {
    positionError.style.display = "block";
    valid = false;
  } else {
    positionError.style.display = "none";
  }

  if (valid && !exists) {
    let usersInfo = new object(name, password, email, selectedValue);
    users.push(usersInfo);
    localStorage.setItem("users", JSON.stringify(users));

    sessionStorage.setItem("loggedInUser", JSON.stringify(usersInfo));

    window.location.href = "../welcome/welcomePage.html";
  } else if (valid && exists) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User Already exists",
    });
    exists = false;
  }

  form.reset();
});

class object {
  constructor(name, password, email, selectedValue) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.selectedValue = selectedValue;
  }
}
