// global scope
// console.log(this)

// inside function
// function abcs(){
//   console.log(this)
// }
// abcs()

// inside an object (method ke ander)
// let person ={
//   names:"muskan",
//   greet : function(){
//     console.log(this)
//   }
// }
// person.greet()

// ye greet h ye method ha

// event handler
// let btn = document.querySelector("button")
// btn.addEventListener("click",function(){
// console.log(this)
// })

// arrow function
// let person={
//   names: "muskan",
//   gret : ()=>{
//     console.log(this.names)
//   }

// }
// person.gret()

// function ke function bnana chate ho  to to ander vale function ko arrow function bnao
// let person = {
//   names: "muskan",
//   gret: function () {
//     let defg = () => {
//       console.log(this.names);
//     };
//     defg();
//   },
// };
// person.gret();

// inside a class

// class Student {
//   constructor(name) {
//     this.name = name;
//   }
//   show() {
//     console.log(this.name);
//   }
// }

// let s1 = new Student("Muskan");
// s1.show();


// call apply bind....
// call
// let person = {
//   names : "Muskan",
//   age : 23
// }
// function abcd(){
//   console.log(`${this.names},${this.age}`)
// }
// abcd.call(person)

// apply
// let person = {
//   names : "Muskan",
//   age : 23
// }
// function abcd(a,b,c){
//   console.log(this,a,b,c)
// }
// abcd.apply(person, [1,2,3])


// bind 
// let person = {
//   names : "Muskan",
//   age : 23
// }
// function abcd(a,b,c){
//   console.log(this,a,b,c)
// }
// let newFunc = abcd.bind(person, 1,2,3)
// newFunc()




