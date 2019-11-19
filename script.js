let formEmail = document.getElementById('cta-email');
let formErrorMessage = document.getElementById('error-message');
let formErrorIcon = document.getElementById('error-icon');
let formButton = document.getElementById('cta-button');

formButton.addEventListener('click', validateEmail);


//Validation of email address
function validateEmail() {
    if(!isEmail(formEmail.value)){
        formEmail.classList.add('error-border');
        formErrorMessage.setAttribute('style', 'display: block;');
        formErrorIcon.setAttribute('style', 'display: inline-block;');
    }

}

//Email text control with RegEx
function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
