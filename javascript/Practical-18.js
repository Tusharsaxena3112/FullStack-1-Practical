//Selector
var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkValid();
});

function checkValid() {
  var userMsg = document.getElementById("user-msg");
  var nameFails = document.getElementById("name-fails");
  var nameCheck = document.getElementById("name-check");
  var emailError = document.getElementById('email-error');
  var emailFails = document.getElementById('email-fails');
  var emailcheck = document.getElementById('email-check');
  if (username.value.trim() === "") {
    username.style.borderBottom = "1px red solid";
    userMsg.innerHTML = "* User Name cannot be Empty";
    userMsg.style.visibility = "visible";
    nameFails.style.visibility = "visible";
  } else {
    userMsg.style.visibility = "hidden";
    nameFails.style.visibility = "hidden";
    nameCheck.style.visibility = "visible";
    username.style.borderBottom = "1px green solid";
  }
  if (email.value.trim() === "") {
    email.style.borderBottom = "1px red solid";
    emailError.innerHTML = "* Email cannot be Empty";
    emailError.style.visibility = "visible";
    emailFails.style.visibility = "visible";
  } else {
    emailError.style.visibility = "hidden";
    emailFails.style.visibility = "hidden";
    emailcheck.style.visibility = "visible";
    email.style.borderBottom = "1px green solid";
  }
}
