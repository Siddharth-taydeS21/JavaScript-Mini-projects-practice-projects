// Make the create pensile constructor with write and erase method;
function CreatePelsile(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;
}

CreatePelsile.prototype.company = "Natraj"

CreatePelsile.prototype.erase = function () {
    let h1 = document.querySelectorAll('h1');
    h1.forEach((emel) => {
        if (emel.style.color === this.color) {
            emel.remove();
        }
    })
}

CreatePelsile.prototype.write = function (text) {
    let h1 = document.createElement('h1');
    h1.style.color = this.color;
    h1.textContent = text;
    document.body.appendChild(h1);
}

let p1 = new CreatePelsile('Natraj', 10, 'black');
let p2 = new CreatePelsile('Doms', 15, 'red');

// Do Some Practice on Class, Constructor, Extend, super
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study = function () {
        return `student: ${this.name} grade: ${this.grade}`
    }
}
let person1 = new Person('Siddharth', 21)
// console.log(person1)
// person1.introduce()
let student1 = new Student('siddhu', 21, "A");

class Vehical {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    move = function () {
        console.log(`The ${this.brand} Car is Running in ${this.speed}kmph speed`);
    }
}

let ford = new Vehical('Ford', 60);

class Car extends Vehical {
    constructor(brand, speed, fuelType) {
        super(brand, speed);
        this.fuelType = fuelType;
    }

    getInfo = function () {
        console.log(`The ${this.brand} car has a Full speed of ${this.speed}kmph and avalible in ${this.fuelType} veriant`)
    }
}

let lambo = new Car('Lamborgini', 350, 'Disel');

class User {
    constructor(userName, email){
        this.userName = userName;
        this.email = email;
    }

    getdetail = function(){
        let h1 = document.createElement('h1');
        h1.textContent = `User: ${this.userName}, Email: ${this.email}`;
        document.body.appendChild(h1);
    }
}

let user1 = new User('Siddharth', 'sidd@123.com');
let user2 = new User('prashik', 'paras@234.com');
// console.log(newUser)

class Admin extends User{
    constructor(userName,email,role){
        super(userName,email);
        this.role = role;
    }
 
    deleteUser= function(){
        let headings = document.querySelectorAll('h1');
        for (const elem of headings) {
            elem.remove();
        }
    }
}

let admin1 = new Admin('Sniya', 'sanu@123.com', 'Dessigner');
let admin2 = new Admin('Rutuja', 'ritu@456.com', 'Artist');
// learn more about prototypal inhertance & practice on Object.create() & Object.prototype