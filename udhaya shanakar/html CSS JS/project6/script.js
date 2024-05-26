var form = document.getElementById("form1");
var username = document.querySelector("#username")
var email = document.querySelector("#email")
var newpwd = document.querySelector("#newpwd")
var confirmpwd = document.querySelector("#confirmpwd")
var eyeBtn = document.querySelector(".eye");

form.addEventListener('submit',(e)=>{    
    formValidation();
    if(!success){
        e.preventDefault();
    }
})

username.addEventListener('focus', () => clearError(username));
email.addEventListener('focus', () => clearError(email));
newpwd.addEventListener('focus', () => clearError(newpwd));
confirmpwd.addEventListener('focus', () => clearError(confirmpwd));

// clear error function:
function clearError(element){
    inputGroup = element.parentElement;
    errorDiv = inputGroup.querySelector(".error");
    errorDiv.innerHTML = "";
}

username.addEventListener('blur', formValidation);
email.addEventListener('blur', formValidation);
newpwd.addEventListener('blur', formValidation);
confirmpwd.addEventListener('blur', formValidation);

function formValidation(){
    success = true;
    let usernameVal = username.value.trim();
    let emailVal = email.value.trim();
    let newpwdVal = newpwd.value.trim();
    let confirmpwdval = confirmpwd.value.trim();

    if(usernameVal === ""){
        success = false;
        setError(username,"username is empty");
    }
    else{
        setSuccess(username);
    }

    if(emailVal === ""){
        success = false;
        setError(email,"email is empty");
    }
    else if(!emailvalidation(emailVal)){
        success = false;
        setError(email,"email id is wrong, type valid email Id")
    }
    else{
        setSuccess(email)
    }

    if(newpwdVal.length<8){
        success = false;
        setError(newpwd,"password should be greater than 8 character");
    }
    else{
        success = false;
        setSuccess(newpwd);
    }

    if(confirmpwdval === ""){
        setError(confirmpwd,"confirm password is required")
    }
    else if(confirmpwdval !== newpwdVal){
        setError(confirmpwd,"confirm password should same as new password")
    }
    else{
        setSuccess(confirmpwd);
    }
}

function setError(element,message){
    inputGroup = element.parentElement;
    errorDiv = inputGroup.querySelector(".error");
    errorDiv.innerHTML = message;

    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}

function setSuccess(element){
    inputGroup = element.parentElement;
    errorDiv = inputGroup.querySelector(".error");
    errorDiv.innerHTML = "";

    inputGroup.classList.remove("error");
    inputGroup.classList.add("success");
}

emailvalidation = (email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
}

eyeBtn.addEventListener("click",()=>{
    parentdiv = eyeBtn.parentElement;
    inputDiv = parentdiv.querySelector("input");
    if(inputDiv.type === "password"){
        inputDiv.type = "text";
    }
    else{
        inputDiv.type = "password";
    }
})