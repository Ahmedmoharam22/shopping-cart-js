let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let signInBtn = document.querySelector("#signIn");

let getUserName = localStorage.getItem("userName");
let getPassword = localStorage.getItem("password");

window.onload = function() {
    userName.focus();
  };

signInBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (userName.value === "" || password.value === "") {
        alert("Fill Your Data");
    } else {
        if (getUserName && getUserName.trim() === userName.value.trim() && getPassword && getPassword.trim() === password.value.trim()) {

            setTimeout(() => {
                window.location = "index.html"
            }, 500)
        } else {
            alert("not valid")
        }
    }
})



