// // function CreateBisuits(name, price, qty, company, category) {
// //   this.name = name;
// //   this.price = price;
// //   this.qty = qty;
// //   this.company = company;
// //   this.category = category;
// // }
// // let biscuit1 = new CreateBisuits("parel",10,5,"muskan","biscuit")
// // console.log(biscuit1);

// // function CreatePencil(names, color, price, company) {
// //   this.names = names;
// //   this.color = color;
// //   this.price = price;
// //   this.company = company;
// //   this.write = function () {
// //     let h1 = document.createElement("h1");
// //     h1.textContent = "help muskan";
// //     h1.style.color = color;
// //     document.body.append(h1);
// //   };
// // }
// // let pencil1 = new CreatePencil("muskan", "red", 10, "isha");
// // let pencil2 = new CreatePencil("muskan", "blue", 10, "isha");
// // console me jaa kar pencile1.write() karne tab body ne dejkha aarhe ga

// // function CreatePencil(names, color, price, company) {
// //   this.names = names;
// //   this.color = color;
// //   this.price = price;
// //   this.company = company;
// //   this.write = function (text) {
// //     let h1 = document.createElement("h1");
// //     h1.textContent = text
// //     h1.style.color = color;
// //     document.body.append(h1);
// //   };
// // }
// // let pencil1 = new CreatePencil("muskan", "red", 10, "isha");
// // let pencil2 = new CreatePencil("muskan", "blue", 10, "isha");
// // console me jaa tab pencel1.write("kuch bi text liho ge tab body me aye ga kuki is me (text leha hua h 35 me ")

// // prototype
// // function CreatePencil(names, color, price, company) {
// //   this.names = names;
// //   this.color = color;
// //   this.price = price;
// //   this.company = company;
// //   CreatePencil.prototype.write = function (text) {
// //     let h1 = document.createElement("h1");
// //     h1.textContent = text
// //     h1.style.color = this.color;
// //     document.body.append(h1);
// //   };
// // }
// // let pencil1 = new CreatePencil("muskan", "green", 10, "isha");
// // let pencil2 = new CreatePencil("muskan", "grey", 10, "isha");

// // ES6 Modern js
// // class Biscuit {
// //   constructor(name, price, qty, company, category) {
// //     this.name = name;
// //     this.price = price;
// //     this.qty = qty;
// //     this.company = company;
// //     this.category = category;
// //   }

// // }
// // let biscuit1 = new Biscuit("parel", 10, 5, "muskan", "biscuit");

// // class CreateStudents {
// //   constructor(names, age, color) {
// //     this.names = names;
// //     this.age = age;
// //     this.color = color;
// //   }
// //   erase() {
// //     document.body.querySelectorAll("h1").forEach((elem) => {
// //       if (elem.style.color === this.color) {
// //         elem.remove();
// //       }
// //     });
// //   }
// //   writting(text) {
// //     let h1 = document.createElement("h1");
// //     h1.textContent = text;
// //     h1.style.color = this.color;
// //     document.body.append(h1);
// //   }
// // }
// // let student1 = new CreateStudents("harsh", 23, "blue");
// // let student2 = new CreateStudents("harsu", 13, "red");

// // extends
// // class User {
// //   constructor(names, address, username, email, color) {
// //     this.names = names;
// //     this.address = address;
// //     this.username = username;
// //     this.email = email;
// //     this.color = color;
// //     this.role = "user";
// //   }
// //   CheckRole(){
// //     console.log(`you are a ${this.role}`)
// //   }

// //   write(text) {
// //     let h1 = document.createElement("h1");
// //     h1.textContent = `${this.names} : ${text}`;
// //     h1.style.color = this.color;
// //     document.body.appendChild(h1);
// //   }
// // }
// // class Admin extends User {
// //   constructor(names, address, username, email, color) {
// //     super(names, address, username, email, color);

// //     this.role = "admin";
// //   }
// //   remove() {
// //     document.querySelectorAll("h1").forEach(function (evt) {
// //       evt.remove();
// //     });
// //   }
// // }
// // let u1 = new User("harsh", "hisar", "miuyt", "qws@gmail.com", "blue");
// // let u2= new User("harshi", "hisar2", "miuyt", "qws@gmail.com", "red");
// // let a1= new Admin("hari", "hisayr2", "muyt", "qwswe@gmail.com", "green");

// // Encapsulation (#private)

// // class BankAccount {
// //   #balance //private property (ES2022 ka feature "hide kiya gya hai ")
// //   constructor(owner,balance){
// //     this.owner = owner
// //     this.#balance = balance //private data
// //   }
// //   deposit(amount){
// //     this.#balance += amount
// //      console.log(`Deposited: ${amount}`);
// //   }
// //   getBalance(){
// //     return `Your balance is : ${this.#balance}`
// //   }
// // }
// // let acc1 = new BankAccount("muskan",5000)

// // Synchronous....
// // console.log("task1")
// // console.log("task2")
// // console.log("task3")
// // console.log("task4")

// // ASynchronous....
// // console.log("task1")
// // setTimeout(()=>{
// //   console.log("task2")

// // },2000)
// // console.log("taks3")

// // callback
// // function greet(names, callback){
// //   console.log("hello" + names)
// //   callback()
// // }
// // function sayBye(){
// //   console.log("bye")

// // }
// // greet("muskan",sayBye)

// // callback pattern
// // function doTask(taskName, callback){
// //   console.log(`task started : ${taskName}`)
// //   setTimeout(()=>{
// //     console.log(`finished started : ${taskName}`)
// //     callback()
// //   },2000)

// // }
// // doTask("dowload file", function(){
// //   console.log("now open the file")

// // })

// // callback hell(old call back )

// // function CallbackHell(names, callback) {
// //   console.log("continus of data ...")
// //   setTimeout(() => {
// //     callback({ rollNo : 23,names, age: 34, email: "mjihv@gmail.com" });
// //   }, 2000);
// // }
// // function AllCallBack(rollNo , callback){
// //   console.log("loading of  posts...")
// //   setTimeout(()=>{
// //     callback({rollNo: rollNo,posts: ["hey","hello","byy"]})
// //   },3000)
// // }
// // function SavedPostNiklo(rollNo,callback){
// //   console.log("saved data...")
// //   setTimeout(()=>{
// //     callback({rollNo:rollNo,saved:["muskan","isha"]})
// //   },4000)
// // }

// // CallbackHell("harsh", function (data) {
// //   console.log(data)
// //   AllCallBack(data.rollNo, function(posts){
// //     console.log(posts)

// //     SavedPostNiklo(data.rollNo,function(saved){
// //       console.log(saved)
// //     })
// //   })
// // });

// // call back hell (promise and asys/awit (moderan callbackhelll))
// // promise (rej , resolve )

// // let pr = new Promise(function (res, rej) {
// //   setTimeout(() => {
// //     let rn = Math.floor(Math.random() * 10);
// //     if (rn > 5) res("reslove with" + rn);
// //     else rej("rejected with" + rn);
// //   }, 2000);
// // });
// // pr.then(function (val) {
// //   console.log(val);
// // }).catch(function (val) {
// //   console.log(val);
// // });

// // callback hell (promise)
// function step1() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("Step 1: User logged in");
//       resolve();
//     }, 1000);
//   });
// }

// function step2() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("Step 2: Get user profile");
//       let error = true;
//       if(error){
//         reject("Falied to ge")
//       }else{
//         resolve();
//       }

//     }, 1000);
//   });
// }

// function step3() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("Step 3: Show dashboard");
//       resolve();
//     }, 1000);
//   });
// }

// function step4() {
//  return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("Step 4: Send welcome email");
//       resolve();
//     }, 1000);
//   });
// }

// step1()
//   .then(step2)
//   .then(step3)
//   .then(step4)
//   .then(() => console.log("All steps done ✅"))
//   .catch(err => console.error("error",err))

// awit /ayns...........
// function getData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Data received ✅");
//     }, 2000);
//   });
// }

// async function showData() {
//   console.log("Fetching data...");
//   let result = await getData();  // ⏳ yaha wait karega
//   console.log(result);
//   console.log("Done");
// }

// showData();

// let per = new Promise(function (res, rej) {
//   setTimeout(() => {
//     let rn = Math.floor(Math.random() * 10);
//     if (rn > 5) res("resolved" + rn);
//     else rej("rejected with " + rn);
//   },1000);
// });
// async function abcd() {
//   try {
//     let val = await per;
//     console.log(val);
//   } catch (err) {
//     console.log(err);
//   }
// }
// abcd();
