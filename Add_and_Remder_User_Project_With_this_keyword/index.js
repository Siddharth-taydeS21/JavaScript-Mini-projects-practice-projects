//Make a golbal object with an empy array to put users;
//make mathod in that object to stop the form form sumition;
//make stopsumbmit fuction outside the event handler and give his instance to the hanldlee;
//make a add user function;
//seelct all inputs using query selector all;
//assign each input to corrct variable to select;
//make a object that contains all inputs at the end of the add user function;
//push that object in users array;
//call the function
//make a render to UI function;
//write create element code code for user card & all inputs step by step;
//appned the card to the card container;
//call the function;
//make a remove user function;
//make delete card button to all created cards;
//when click on delete card btn, track event.target and remove the target element's parrent card form card's parrent element.
//call the function

//+++++++++++++++++++++++++ Done ++++++++++++++++++++++++++  
let form = document.querySelector('form');
let Inputs = document.querySelectorAll('input');
let userName = Inputs[0];
let dataId = Inputs[1]
let role = Inputs[2];
let photo = Inputs[3];
let bio = document.querySelector('textarea');
const usersContainer = document.querySelector(".users-container");




const userManeger = {
    users: [],
    init: function () {
        form.addEventListener('submit', this.submitForm.bind(this))
    },
    submitForm: function (e) {
        e.preventDefault();
        this.adduser();
        this.renderUsers();
        this.removeUser()
        form.reset();
    },
    adduser: function () {
        let obj = {};
        userName.value.trim() === '' ? alert('please enter a valid name') : obj.userName = userName.value;
        role.value.trim() === '' ? alert('please enter a valid role') : obj.role = role.value;
        bio.value.trim() === '' ? alert('please enter a valid bio') : obj.bio = bio.value;
        obj.photo = photo.value;
        obj.dataId = dataId.value;

        this.users.push(obj);
    },
    renderUsers: function () {
        usersContainer.innerHTML = "";

        this.users.forEach(function (user) {
            const card = document.createElement("div");
            card.className = "user-card";

            // Image
            const img = document.createElement("img");
            img.className = "user-image";
            img.src = user.photo;
            img.alt = "User Photo";
            card.appendChild(img);

            // Name
            const name = document.createElement("h2");
            name.className = "user-name";
            name.textContent = user.userName;
            card.appendChild(name);

            // Role
            const role = document.createElement("p");
            role.className = "user-role";
            role.textContent = user.role;
            card.appendChild(role);

            // Bio
            const desc = document.createElement("p");
            desc.className = "user-bio";
            desc.textContent = user.bio;
            card.appendChild(desc);

            // Delete btn
            const deleteBtn = document.createElement('button');
            deleteBtn.className = "delete-Btn";
            deleteBtn.id = user.dataId;
            deleteBtn.textContent = 'Delete this Card';
            card.appendChild(deleteBtn);

            usersContainer.appendChild(card);
        });
    },
    removeUser: function () {
        // ++++++++++++++++++ Remove user Logic -
        //get data id from users as an input;
        //put the data id input in the same object as data id
        //while creating cards make delete button and put the data id as id of that button
        //add one click listener to all buttons and extraect the button id's when clicked;
        //filter our users array to find the object that has a data id which mathches button id;
        //when you found the object get his index number;
        //sins you have the index number use array.splice() to remove the object and update the array
        //++++++++++ Done ++++++++++++
        let deleteBtn = document.querySelectorAll('.delete-Btn');
        deleteBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                let buttonID = e.target.attributes.id.value;
                this.users.forEach((user) => {
                    if (buttonID === user.dataId) {
                        let i = this.users.indexOf(user);
                        this.users.splice(i,1)
                    }
                })
                this.renderUsers();
            })
        })

    }
}
userManeger.init();