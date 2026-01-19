const convertBtn = document.querySelector('#convert-btn');
const numberInp = document.querySelector('#number');
const output = document.querySelector('#output');

const table = [
    { arabic: 1000, roman: 'M' },
    { arabic: 900, roman: 'CM' },
    { arabic: 500, roman: 'D' },
    { arabic: 400, roman: 'CD' },
    { arabic: 100, roman: 'C' },
    { arabic: 90, roman: 'XC' },
    { arabic: 50, roman: 'L' },
    { arabic: 40, roman: 'XL' },
    { arabic: 10, roman: 'X' },
    { arabic: 9, roman: 'IX' },
    { arabic: 5, roman: 'V' },
    { arabic: 4, roman: 'IV' },
    { arabic: 1, roman: 'I' }
];

//Roman to Numeral logic
const romantoNumeral = (num) => {
    let Roman = '';
    let i = 0;
    while(num > 0){
        if(table[i].arabic <= num){
            num -= table[i].arabic;
            Roman += table[i].roman;
        }else{
            i++;
        }
    }
    return output.textContent = Roman;
}

//validation logic 
const validateinput = () => {
    let newInp = numberInp.value.replace(/[^0-9+\-]/g, "");
    if (newInp === '') {
        output.textContent = "Please enter a valid number"
    } else if (newInp <= 0) {
        output.textContent = "Please enter a number greater than or equal to 1"
    } else if (newInp > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999"
    } else {
        // console.log(newInp)
        romantoNumeral(parseInt(newInp))
        numberInp.value = '';
    }
}

convertBtn.addEventListener('click', validateinput)