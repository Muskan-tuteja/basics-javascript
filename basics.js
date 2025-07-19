// scope (global,block,functional)

// global scope
// var a=20;

// functional scope
// function abcd(){
//   let b =20
// }
// block scope
{

}

// reassignment ,redeclaration
// var a =12;
// a=34;
// var a =23



// let b =34
// b=78

// let b =68 not declaration

// temporal dead zone(utna area jitna main js lo pata to hai ki variable exist karta hai par wo apko value nahi de sakta  )

// console.log(a)

// let a = 20


// .....Hosting impact per type....



// console.log(a)
// let a = 12

// var=>hoist=>undefined
// let=>hoist=>x(initilization)
// const=>hoist=>x(intilization)

// practice question and answer(hoisting)
// console.log(nm)
// var nm="muskan"

// console.log(age)
// let age =23;


// let a = 10 
// {
//   let a =20;
//   console.log("inside:",a);

// }
// console.log("outside:",a)

// if(true){
//   var a= 1
//   let b =2
// }
// let curly barces ki  bhar use ni kar sakte hai
// var ka curky barces ke ander is liya use ho raha h kuki koi (function create ni hai )
// console.log(a)
// console.log(b)


// why const allows changing object properties
// const person ={name: "muskan"}
// person.name = "isha"
// person = {}/


// data type
// primitives

// symbol => unique immutable value

// let ut1 = "muskan"
// let ut2= "muskan"

// type coercion => concept jismein apka ek type automatically convert hojaayega

// 0 false "" null undefined NaN document.all => false

//type of NaN =>Number ku hai . NaN => ik falied number of opeation 

// practices

// let x =10
// let y =20

// if(x>5 && y<25){
//   console.log("a")
// }else{
//   console.log("b")
// }

// let isadmin =true
// let isloggedin = false

// if(isadmin || isloggedin){
//   console.log("Access granted")
// }else{
//   console.log("Access denied")
// }



// let temp = 34

// if(!(temp < 30)){
//   console.log("hot")
// }else{
//   console.log("pleasant")
// }

// let a = 0

// if(a){
//   console.log("true")
// }else{
//   console.log("false")
// }


// let score =78
// let grade = score >=90?"a": score>=75 ? "b" : score >=60 ? "c" :"fail";

// console.log(grade);

// let score =99
// let grade = score >=90?"a": score>=75 ? "b" : score >=60 ? "c" :"fail";

// console.log(grade);


// let x = 3
// let y = x++
// console.log(x,y)

// let p =4
// let q =++p
// console.log(p,q)

// let n =5
// let result = n++ + ++n
// console.log(result)


// let likes = 100
// function likepost(){
//   return++likes
// }
// console.log(likepost())
// console.log(likes)


// let count = 5
// if(count-- === 5){
//   console.log("matched")

// }else{
//   console.log("not matched")
// }


//  if else else-if(question )
// if(12>14){
//   console.log("false")
// }else if(12>16){
//   console.log("true")
// }else if(12>15){
//   console.log("true")
// }
//   console.log("koi bi ni")

// switch
//  switch (2,3,1){
//   case 1:
//     console.log("hello")
//     break;
//   case 2:
//     console.log("hii")
//     break;
//   case 3:
//     console.log("hey")
//     break;

//  }



// early return pattern
// function getGrade(score){
//   if(score>=90 && score <=100) return "A+"
//   if(score>=80 && score <=89) return "A"
//   if(score>=70 && score <=79) return "B"
//   if(score>=60 && score <=69) return "B+"
//   if(score>=33 && score <=59) return "C"
//   if(score>=0 && score <=32) return "F"
//   return "Invalid marks"
// }
// console.log(getGrade(-1))


// Rock-paper-scissors Logic

// function rps(user, computer){
//   if(user === computer) return "draw";

//   if(user ==="rock" && computer ==="scissor") return " user"
//   if(user === "scissor" && computer ==="paper") return "user"
//   if(user === "paper" && computer ==="rock") return "user"

//   return "computer"

// }
//  console.log(rps("paper","scissor"))
























