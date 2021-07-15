

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    /*INPUT TEXT OBJECTS */ 
var scales = document.forms["vform"]["scales"];
var username = document.forms["vform"]["username"];
var email = document.forms["vform"]["email"];
var password = document.forms["vform"]["password"];
var password_confirmation = document.forms["vform"]["password_confirmation"];


    /* LISTENERS*/ 
scales.addEventListener("blur", nameVerify, true);
username.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);
password_confirmation.addEventListener("blur", passwordVerify, true);
});
  
  /* ERROR DISPLAY OBJECTS*/ 
  var error_scales = document.getElementById("error_scales");
  var error_password = document.getElementById("error_password");
  var error_name = document.getElementById("error_name");
  var error_email = document.getElementById("error_email");
  var password_confirmation_error = document.getElementById("password_confirmation_error");


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email,re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
}


       /* VALIDATION FUNCTION*/ 
    
    function Validate() {
        let error_name = document.getElementById("error_name");
        let error_password = document.getElementById("error_password");
        let error_email = document.getElementById("error_email");
        let password_confirmation_error = document.getElementById("password_confirmation_error");
        console.log(error_password);
        if (username.value == "") {
        username.style.border = "1px solid red";
        error_name.textContent = "Username is required";
        username.focus();
        return false;
    }
    if (!validateEmail(email.value)) {
        email.style.border = "1px solid red";
        error_email.textContent = "Email is required";
        email.focus();
        return false;
    }
    if (password.value == "") {
        password.style.border = "1px solid red";
        error_password.textContent = "Password is required";
        password.focus();
        return false;
    }

        /*  check if the two password match */
    if (password.value != password_confirmation.value) {
        error_password.style.border = "1px solid red";
        password_confirmation_error.textContent = "Do not match";
        error_password.innerHTML = "";
        return false;
    } else {
        error_password.style.border = "1px solid transparent";
        password_confirmation_error.style.border = "1px solid transparent";
        password_confirmation_error.textContent = "";
        error_password.innerHTML = "";
    }
}     

    
    /* EVENT HANDLER FUNCTION*/ 

        function passwordVerify() {
        let error_password = document.getElementById("error_password");
            if (password.value !="") {
                password.style.border = "1px solid green";
                error_password.innerHTML = "";
                return true;
            }
        }

        function passwordVerify() {
        let error_password = document.getElementById("error_password");
            if (password.value !="") {
                password.style.border = "1px solid green";
                password_confirmation.style.border = "2px solid green";
                error_password.innerHTML = "";
                return true;
            }
        }
        function nameVerify() {
            let error_name = document.getElementById("error_name");
            if (username.value !="") {
                username.style.border = "1px solid green";
                error_name.textContent = "";
                return true;
            }
        }
        function emailVerify() {
            let error_email = document.getElementById("error_email");
            if (validateEmail(email.value)) {
                email.style.border = "1px solid green";
                error_email.innerHTML = "";
                return true;
            }
        } 
