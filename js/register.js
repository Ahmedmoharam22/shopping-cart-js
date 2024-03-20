let userName = document.querySelector("#userName")
let password = document.querySelector("#password")
let email = document.querySelector("#email")
let signUPBtn = document.querySelector("#signUP")

window.onload = function() {
    userName.focus();
  };


signUPBtn.addEventListener("click", function(e){
    e.preventDefault();
    if (userName.value === "" || password.value === "" || email.value === "") {
         alert("please Fill The Empty")        
    } else {
        localStorage.setItem("userName" , userName.value);
        localStorage.setItem("password" , password.value);
        localStorage.setItem("email" , email.value);

        setTimeout(() => {
            window.location = "login.html"
        }, 500);
    }  
})