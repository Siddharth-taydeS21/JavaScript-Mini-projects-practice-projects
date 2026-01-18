const checkBtn = document.querySelector('#check-btn');
const input = document.querySelector('#text-input');
const result = document.querySelector('#result')

const checkPalindrome = () => {
  const newInput = input.value
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  let arr = [];
  for (let i = 0; i < newInput.length; i++) {
    if (newInput[i] === newInput[newInput.length - i - 1]) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  // console.log(arr)
  if (arr.includes(false)) {
    result.textContent = `${input.value} is not a palindrome`
  } else {
    result.textContent = `${input.value} is a palindrome`
  }
}

const validateinput = () => {
  if (input.value.replace(/\s/g, '') === '') {
    alert("Please input a value");
  };
  checkPalindrome();
  input.value = '';
}

checkBtn.addEventListener('click', validateinput)