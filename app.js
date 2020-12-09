const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(usernameValue === '') {
        // add error class
        setErrorFor(username, 'Username cannot be blank')
    } else {
        // add suvves class
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email);
    } 

    if(passwordValue === '') {
        // add error class
        setErrorFor(password, 'Password cannot be blank')
    } else {
        // add suvves class
        setSuccessFor(password);
    }

    if(confirmPasswordValue === '') {
        // add error class
        setErrorFor(confirmPassword, 'Confirm Password cannot be blank')
    } else if(confirmPasswordValue !== passwordValue) {
        setErrorFor(confirmPassword, 'Passwords do not match');
    } else {
        // add suvves class
        setSuccessFor(confirmPassword);
    }

    // show a succes message
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error mesage inside small tag
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
