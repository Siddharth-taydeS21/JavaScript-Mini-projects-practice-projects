let main = document.querySelector(".main");
let massage = document.querySelector("#massage");
let progressBar = document.querySelector(".progress-bar");
let percentage = document.querySelector("#percentage");
let button = document.querySelector(".btn");

massage.style.display = "none";
percentage.style.display = "none";

let progress = 0;

button.addEventListener('click', (e) => {
    massage.style.display = "block";
    percentage.style.display = "block";
    main.removeChild(button);

    let interval = setInterval(() => {
        if (progress >= 90) {
            clearInterval(interval)
            massage.textContent = "Download Compleated✅"
        }
        progress += 10;
        progressBar.style.width = progress + "%"
        percentage.textContent = progress + "%"

    }, 1000)

    setTimeout(() => {
        percentage.textContent = ""
    }, 12000)
})
