// function CreateBisuits(name, price, qty, company, category) {
//   this.name = name;
//   this.price = price;
//   this.qty = qty;
//   this.company = company;
//   this.category = category;
// }
// let biscuit1 = new CreateBisuits("parel",10,5,"muskan","biscuit")
// console.log(biscuit1);

// function CreatePencil(names, color, price, company) {
//   this.names = names;
//   this.color = color;
//   this.price = price;
//   this.company = company;
//   this.write = function () {
//     let h1 = document.createElement("h1");
//     h1.textContent = "help muskan";
//     h1.style.color = color;
//     document.body.append(h1);
//   };
// }
// let pencil1 = new CreatePencil("muskan", "red", 10, "isha");
// let pencil2 = new CreatePencil("muskan", "blue", 10, "isha");
// console me jaa kar pencile1.write() karne tab body ne dejkha aarhe ga

// function CreatePencil(names, color, price, company) {
//   this.names = names;
//   this.color = color;
//   this.price = price;
//   this.company = company;
//   this.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text
//     h1.style.color = color;
//     document.body.append(h1);
//   };
// }
// let pencil1 = new CreatePencil("muskan", "red", 10, "isha");
// let pencil2 = new CreatePencil("muskan", "blue", 10, "isha");
// console me jaa tab pencel1.write("kuch bi text liho ge tab body me aye ga kuki is me (text leha hua h 35 me ")

// prototype
// function CreatePencil(names, color, price, company) {
//   this.names = names;
//   this.color = color;
//   this.price = price;
//   this.company = company;
//   CreatePencil.prototype.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text
//     h1.style.color = this.color;
//     document.body.append(h1);
//   };
// }
// let pencil1 = new CreatePencil("muskan", "green", 10, "isha");
// let pencil2 = new CreatePencil("muskan", "grey", 10, "isha");

// ES6 Modern js
// class Biscuit {
//   constructor(name, price, qty, company, category) {
//     this.name = name;
//     this.price = price;
//     this.qty = qty;
//     this.company = company;
//     this.category = category;
//   }

// }
// let biscuit1 = new Biscuit("parel", 10, 5, "muskan", "biscuit");

// class CreateStudents {
//   constructor(names, age, color) {
//     this.names = names;
//     this.age = age;
//     this.color = color;
//   }
//   erase() {
//     document.body.querySelectorAll("h1").forEach((elem) => {
//       if (elem.style.color === this.color) {
//         elem.remove();
//       }
//     });
//   }
//   writting(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.append(h1);
//   }
// }
// let student1 = new CreateStudents("harsh", 23, "blue");
// let student2 = new CreateStudents("harsu", 13, "red");

// extends
// class User {
//   constructor(names, address, username, email, color) {
//     this.names = names;
//     this.address = address;
//     this.username = username;
//     this.email = email;
//     this.color = color;
//     this.role = "user";
//   }
//   CheckRole(){
//     console.log(`you are a ${this.role}`)
//   }

//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = `${this.names} : ${text}`;
//     h1.style.color = this.color;
//     document.body.appendChild(h1);
//   }
// }
// class Admin extends User {
//   constructor(names, address, username, email, color) {
//     super(names, address, username, email, color);

//     this.role = "admin";
//   }
//   remove() {
//     document.querySelectorAll("h1").forEach(function (evt) {
//       evt.remove();
//     });
//   }
// }
// let u1 = new User("harsh", "hisar", "miuyt", "qws@gmail.com", "blue");
// let u2= new User("harshi", "hisar2", "miuyt", "qws@gmail.com", "red");
// let a1= new Admin("hari", "hisayr2", "muyt", "qwswe@gmail.com", "green");


// Encapsulation (#private)

// class BankAccount {
//   #balance //private property (ES2022 ka feature "hide kiya gya hai ")
//   constructor(owner,balance){
//     this.owner = owner
//     this.#balance = balance //private data
//   }
//   deposit(amount){
//     this.#balance += amount
//      console.log(`Deposited: ${amount}`);
//   }
//   getBalance(){
//     return `Your balance is : ${this.#balance}`
//   }
// }
// let acc1 = new BankAccount("muskan",5000)



// Synchronous....
// console.log("task1")
// console.log("task2")
// console.log("task3")
// console.log("task4")

// ASynchronous....
// console.log("task1")
// setTimeout(()=>{
//   console.log("task2")

// },2000)
// console.log("taks3")

