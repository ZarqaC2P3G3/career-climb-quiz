const form = document.getElementById("form");

let users = [];
let valid = false;

if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  users.forEach((element) => {
    if (element.email == email && element.password == password) {
      //   valid = true;
      window.location.href = "../welcome/welcomePage.html";
      //   console.log(typeof password);
    }
    else if (element.email != email) {
      if (element.password == password) {
        alert("Email not correct");
      }else if (element.password!= password)
    }

    else if (element.email != email && element.password != password) {
      alert("Email or password not correct");
    }
  });
  form.reset();
});


