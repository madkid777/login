//signUP part
var createName = document.querySelector(".createName")
var createEmail = document.querySelector(".createEmail")
var createPassword = document.querySelector(".createPassword")
var signButton = document.querySelector(".signUP")
var sucessmessage = document.querySelector(".sucessmessage")
var signMassge = document.querySelector(".signMassge")
var signPage = document.querySelector(".signPage")
var signUPPage = document.querySelector(".signUPPage")


var accounts = []
if (localStorage.getItem("Accounts") !== null) {
    accounts = JSON.parse(localStorage.getItem("Accounts"))
}

function create() {
    var accountCreated = {
        username: createName.value,
        email: createEmail.value,
        password: createPassword.value
    }

    if (createName.value == "" || createEmail.value == "" || createPassword.value == "") {
        signMassge.classList.remove("d-none")
        return
    }
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].email === accountCreated.email) {
            signMassge.innerHTML = "Email already exists!";
            signMassge.classList.remove("d-none");
            sucessmessage.classList.add("d-none");
            return;
        }
    }
    accounts.push(accountCreated)
    localStorage.setItem("Accounts", JSON.stringify(accounts))
    sucessmessage.classList.remove("d-none")
    signMassge.classList.add("d-none")
    console.log(accounts);
    clear()

}

if (signButton) {
    signButton.addEventListener("click", create);
}
function clear() {
    if (createName) createName.value = ""
    if (createEmail) createEmail.value = ""
    if (createPassword) createPassword.value = ""
    if (signEmail) signEmail.value = ""
    if (signPassword) signPassword.value = ""
}


//signIn part
var signEmail = document.querySelector(".signEmail")
var signPassword = document.querySelector(".signPassword")
var loginButton = document.querySelector(".login")
var middleBox = document.querySelector(".box-name")
var logout = document.querySelector(".logout")

function login() {
    var email = signEmail.value
    var password = signPassword.value
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].email === email && accounts[i].password === password) {
            localStorage.setItem("loggedUser", accounts[i].username)
            location.assign("/logoutpage.html")
            return;
        } else {
            signMassge.classList.remove("d-none")
        }
    }
}
var userName = localStorage.getItem("loggedUser");

if (middleBox && userName) {
    middleBox.innerHTML = `Welcome ${userName}`;
}
if (loginButton) {
    loginButton.addEventListener("click", login)
}
if (logout) {
    logout.addEventListener("click", function () {
        location.assign("/index.html")
    })
}