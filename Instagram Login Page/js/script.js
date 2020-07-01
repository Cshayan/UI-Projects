// Set the year in footer
document.getElementById('year').innerHTML = new Date().getFullYear();

// Make the button enable when all the form feilds are filled
var email = document.getElementById('email');
var password = document.getElementById('password');
var submit = document.getElementById('submit');

function manage() {
    if (email.value !== '' && password.value !== '') {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
}