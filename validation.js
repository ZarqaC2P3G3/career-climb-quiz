const form = document.getElementById('signupForm');
let nameError=document.getElementById("nameError")
let emailError=document.getElementById("emailError")
let passwordError=document.getElementById("passwordError");
let positionError=document.getElementById("positionError");
let checkboxError=document.getElementById("checkboxError");
let selectedValue;
const dropdownItems = document.querySelectorAll('.dropdown-item');
let valid = true;
const users = [];


dropdownItems.forEach(item => {
  item.addEventListener('click', function() {
    selectedValue = this.getAttribute('data-value');
    console.log(selectedValue);
  });
});

form.addEventListener('submit', function(e) {

    e.preventDefault();
    
    const name = e.target.username.value;
    const usernameRegex = /^\S+$/;
    if (!usernameRegex.test(name)) {
        nameError.style.display="block";
        valid=false;
    }
    else{
        nameError.style.display="none";
        
        
    }

    const password = e.target.password.value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.style.display="block";      
        valid=false;

      }
      else{
        passwordError.style.display="none";
        
    }

      const email = e.target.email.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        emailError.style.display="block";  
        valid=false;
  
    }
    else{
      emailError.style.display="none";
      
  }



  const checkbox=e.target.checkbox.checked;
  if (checkbox===true) {
    checked="checked";
    checkboxError.style.display="none";
    
    // console.log(checked);
    
  }
  else{
    checkboxError.style.display="block"; 
    checked="error";
    valid=false;

    // console.log(checked);
  }

  if(selectedValue == null){
    positionError.style.display="block";
    valid=false;
  }
  else{
    positionError.style.display="none";
    
  }


  if (valid) {
    userInfo.userName = name;
    userInfo.userEmail = email;
    userInfo.userPassword = password;
    userInfo.userPosition = selectedValue;
    
    users.push(userInfo);
    
    localStorage.setItem("userInfo", JSON.stringify(users));
    form.reset();
    }     

});

const userInfo = {
  userName: "",
  userEmail: "",
  userPassword: "",
  userPosition: "",
};


 // Constructor(userName, userEmail, userPassword, userPosition){
  //   this.userName = userName;
  //   this.userEmail = userEmail;
  //   this.userPassword = userPassword;
  //   this.userPosition = userPosition;
//   }

// function SubmitedInfo(name,password,email,checkbox,position) {
//   this.name = name;
//   this.password=password;
//   this.email=email;
//   this.checkbox = checkbox;
//   this.position = position;
// }

