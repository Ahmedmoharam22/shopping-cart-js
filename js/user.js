let userInfo = document.querySelector("#userInfo")
let user = document.querySelector("#user")
let links = document.querySelector("#links")

if (localStorage.getItem("userName")) {
    links.remove();
    user.style.display = 'block'
    userInfo.style.display = "flex";
    user.innerHTML = "Welcom " + localStorage.getItem("userName");
}

let logOutBtn = document.querySelector("#logOut")
logOutBtn.addEventListener("click",logOut)
function logOut() {
 localStorage.clear();
    setTimeout(() => {
        window.location = "index.html"
    }, 500);

}