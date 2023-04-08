const form = document.getElementById('form');


let users = [];

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }

form.addEventListener('submit', function(e){
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;



    users.forEach((element) => {
        if (element.email === email && element.password === password) {
            window.location.href = "../welcome/welcomePage.html";
            console.log(email);
        }
        else if (element.email === email || element.password === password) {
            alert("Email or Password is incorrect");
        }
        else{
            alert("User not found!");
        }
      });


});