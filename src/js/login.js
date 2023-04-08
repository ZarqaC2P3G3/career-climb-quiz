const form = document.getElementById("form");
const dropdownItems = document.querySelectorAll(".dropdown-item");

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
    // console.log(selectedValue);
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;
  let username;

  users.forEach((element) => {
    if (element.email == email && element.password == password) {
      // window.location.href = "../welcome/welcomePage.html";
      username = element.name;
      valid = true;

      //   console.log(typeof password);
    } else if (element.email == email && element.password != password) {
      emailExists = true;
    }
    console.log(email, element.email, password, element.password);
    console.log(valid);
  });
  if (!valid && emailExists) {
    alert("incorrect email or password");
  }

  if (valid) {
    console.log(username, selectedValue);
    sessionStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        name: username,
        selectedValue: selectedValue,
      })
    );
    window.location.href = "../welcome/welcomePage.html";
  }

  form.reset();
});
