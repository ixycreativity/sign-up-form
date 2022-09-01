const email = document.getElementById('iEmail');
const iname = document.getElementById('iName');
const password = document.getElementById('iPassword');
const submit = document.getElementById('submit');

const emailValidator = (text) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if  (text.value.match(validRegex)){
        return true;
    } else {
        return false;
    }
}


document.addEventListener("DOMContentLoaded", () => {

submit.addEventListener("click", () => {
    if(iname !== null && password !== null && emailValidator(email) === true) {
        alert("All credentials are correct!");
    }
    else {
        alert("Credentials are not correct!");
    }
});

});