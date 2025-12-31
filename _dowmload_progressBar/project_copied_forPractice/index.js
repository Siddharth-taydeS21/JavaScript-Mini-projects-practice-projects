let progressBar = document.querySelector(".progress-bar");
let percentage = document.querySelector("#percentage");
let massage = document.querySelector("#massage")

let count = 0;

setInterval(() => {
    if(count <= 99){
        count++
        progressBar.style.width = `${count}%`;
        percentage.textContent = `${count}%`;
    }else if(count === 100){
        massage.textContent = "Download Compleated✅"
        percentage.textContent = "";
    }
}, 8000 / 100)