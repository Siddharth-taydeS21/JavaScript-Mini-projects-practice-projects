//form apperes on add button and closes on close button;
//function to stop the form from submition, and all input validatiion;
//after checking all inputs pass the inputs in an object.
//functiom which creates array of objects, reciving the validated objects to add in that array.
//in next step sting version of that array shout be added in the local storage in a tasks named key.
//function to create actual cards on screen.
//function getting objects from the array inside the local storage. and converting the info into cards, and showing on screen using foreach loop.
//making the up and down buttons work. on up btn last child would be the first child of all card's parrent and on down btn last would be the first child of all card's parrent.
//function to handle a delete all cards button. when click local storage should cleare() and add new note form should appear again.

let form = document.querySelector('form');
let textInputs = form.querySelectorAll('input[type="text"]');
let stack = document.querySelector('.stack');
let leftbtn = document.querySelector("#leftbtn");
let rightbtn = document.querySelector("#rightbtn");
let deleteBtn = document.querySelector("#delete-all-notes");

const imageInput = textInputs[0];
const nameInput = textInputs[1];
const townInput = textInputs[2];
const purposeInput = textInputs[3];


let fromContainer = document.querySelector('.form-container');
let noteContainer = document.querySelector('.note-container');
let addBtn = document.querySelector("#add-note");
let closeBtn = document.querySelector(".closeForm");

let radioInputs = document.querySelectorAll('input[type="radio"]');

addBtn.addEventListener("click", (e) => {
    fromContainer.style.display = "initial"
    noteContainer.style.display = "none"
})
closeBtn.addEventListener("click", (e) => {
    fromContainer.style.display = "none"
    noteContainer.style.display = "flex"
})

// Logic from vlidating the from
function formValidation() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //validatons -
        let selected;
        radioInputs.forEach((input) => {
            if (input.checked) {
                selected = input.value;
            }
        })

        if (imageInput.value.trim() === "") {
            alert("alert valid img")
        }
        if (nameInput.value.trim() === "") {
            alert("alert valid name")
        }
        if (townInput.value.trim() === "") {
            alert("alert valid home town")
        }
        if (purposeInput.value.trim() === "") {
            alert("alert valid purpose")
        } else {
            let obj = {
                img: imageInput.value,
                userName: nameInput.value,
                hometown: townInput.value,
                purpose: purposeInput.value,
                radioInput: selected
            }
            saveToLocalStorage(obj)
        }
        form.reset();
        document.querySelector('.form-container').style.display = "none";
        createCrads();
        location.reload();
    })
}
formValidation();

// Lofic for saving data inside the localStorage
function saveToLocalStorage(obj) {
    if (localStorage.getItem('tasks') === null) {
        let Tasks = [];
        Tasks.push(obj);
        let newArr = JSON.stringify(Tasks);
        localStorage.setItem('tasks', newArr)
    } else {
        let oldTasks = localStorage.getItem('tasks');
        let oldArr = JSON.parse(oldTasks);
        oldArr.push(obj);
        let newArr = JSON.stringify(oldArr);
        localStorage.setItem('tasks', newArr)
    }
}


// Logic for creating cards 
function createCrads() {
    let task = localStorage.getItem('tasks');
    TaskArr = JSON.parse(task)
    let newArr = TaskArr.filter((val)=>{return val !== null});
    // we dont need null values to create cards, becuse onlyonecard logic can't run if the array contains null values
    newArr.forEach((user) => {
            let div = document.createElement('div');
            if (newArr.length === 1) {
                div.classList.add('onlyOneCard');
                //if the card is only one we need to show it in center..
            }else{
                div.classList.add('card')
            }

            let img = document.createElement('img');
            img.classList.add('avatar');
            img.setAttribute('src', user.img)

            let heading = document.createElement('h2');
            heading.textContent = user.userName;

            let town = document.createElement('div');
            town.classList.add("homeTown")
            town.innerHTML = `<p>Home</p><p>${user.hometown}</p>`

            let purpose = document.createElement('div');
            purpose.classList.add("purpose")
            purpose.innerHTML = `<p>Purpose</p><p>${user.purpose}</p>`

            let call = document.createElement("button");
            call.textContent = "Call";
            call.classList.add("call")

            let massage = document.createElement("button");
            massage.textContent = "Massage";
            massage.classList.add("msg");

            div.appendChild(img);
            div.appendChild(heading);
            div.appendChild(town);
            div.appendChild(purpose);
            div.appendChild(call);
            div.appendChild(massage);

            stack.appendChild(div);
    })
}
createCrads();

// Logic for right and left buttons
rightbtn.addEventListener('click', () => {
    let lastChild = stack.lastElementChild;
    if (lastChild) {
        stack.insertBefore(lastChild, stack.firstElementChild)
    }
})
leftbtn.addEventListener('click', () => {
    let firstChild = stack.firstElementChild;
    if (firstChild) {
        stack.appendChild(firstChild, stack.lastElementChild)
    }
})

// Logic for deleteting all notes(cards) 
deleteBtn.addEventListener('click', () => {
    localStorage.clear();
    stack.innerHTML = '';
    fromContainer.style.display = "initial"
})