const userInput = document.querySelector('#user-input');
const checkBtn =  document.querySelector("#check-btn");
const cleraBtn =  document.querySelector("#clear-btn");
const output = document.querySelector('#results-div');
const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-])?\d{3}([\s-])?\d{4}$/;

const validatePhoneNum = (num) => {
    if(regex.test(num)){
        output.textContent = `Valid US number: ${num}`
    }else{
        output.textContent = `Invalid US number: ${num}`
    }
}

const validateinput = () => {
    if(userInput.value.trim() === ""){
        alert("Please provide a phone number");
    }
    validatePhoneNum(userInput.value);
    userInput.value = '';
}

const clearResult = () => {
output.textContent = '';
}

cleraBtn.addEventListener('click', clearResult)
checkBtn.addEventListener('click', validateinput);