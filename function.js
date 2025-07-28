// function call(){
//   console.log("dance")
//   console.log("dance")
//   console.log("dance")
//   console.log("dance")
//   console.log("dance")
// }
// call()
// call()

// sum(10,20)
// function sum(a,b){
//   console.log(a+b)
// }

// function ab(v1){
//   console.log(`${v1} is no deffine`)
// }
// ab("ab")
// ab("bs")
// ab("cs")
// ab("ed")

// parameters and arguments
// 1.function sum(a1,a2){
//   console.log(a1+a2)
// }
// sum(20,30)

// 2.
// fn1(1,"muskan",9)
// function fn1(x){
//   console.log(x)
// }

// Deafult parmeters
// function sum(a=10,b=0){
//   console.log(a+b)
// }
// sum()

// undefined
// function add(v1,v2){
//   console.log(v1,v2)
// }
// add()

// NaN
// function add(v1,v2){
//   console.log(v1+v2)
// }
// add()

// Rest use(...) or spread
// function muli(...val) {
//   console.log(val);
// }
// muli(1, 2, 2, 3, 4);

// function sum(...a){
//   console.log(a)

// }
// sum(10,20,3)

// spread with Arrays
// let arr1 = [1,2,3]
// let arr2 = [...arr1,45,56]

// console.log(arr2)

// return

// function functionName() {
//   return value;
// }

// function name(){
//   return 12,13
// }
// let val = name();
// console.log(val)

// function var2(v){
//   return 21 +v
// }
// let val = var2(56)
// console.log(val)

// function add(a,b){
//   return a*b
// }
// let result = add(4,5)
// console.log(result)

// function isEven(num){
//   if(num % 2 === 0 ){
//     return true
//   }
//   return false
// }
// console.log(isEven(10))

// function sum(a,b){
//   return;
//   a+b;
// }
// console.log(sum(3,2))

// function sayHello(){
//   return "hii"
//   console.log("hello")
// }
// console.log(sayHello())

// function prime(n){
//   if(n ===1) return false
//   for(let i=2; i<=n/2; i++){
//     if(n%i===0) return false
//   }
//   return true
// }

// first class function

// function abcd (val){
//   val()
// }
// abcd(function() {
//   console.log("hello")
// })

// pure and improve function
// let a = 10
// function add(a,b){
//   return a+b
// }
// function hello(a,c){
//   a++
// }

// closure
// function outer(){
//   let name = "muskan"

//   function inner(){
//     console.log("hello"+name)
//   }
//   return inner
// }
// const greet = outer()
// greet()

// function name(){
//   let a = 12
//   return function(){
//     console.log(a)
//   }
// }

// lexical scope

// function outer(){
//   let a=10

//   return function inner(){
//     console.log(a)
//   }
// }
// const fn = outer();
// fn()

// not lexical sope
// function outer(){
//   let city = "ahar"
// }
//  function inner(){
//   console.log(city)
// }
// inner()
// function outer(){
//   let city = "ahar"
// }
//  return function inner(){
//   console.log(city)
// }
// const fn = outer
// fn()

//  IIFE – Immediately Invoked Function Expression

// (function() {
//   console.log("muskan")
// })()

// (() => {
//   console.log("basicsss js")
// })();

// hositing declaration

// name();

// function name(){
//   console.log("muskan mahi")
// }

// hosting expression (hosting karte vakta error dega )

// name()

// let name = function(){
//   console.log("muskan")
// }

// practices question answer

// greet()

// function greet(){
//   console.log("hello")
// }
// console.log("helo")

// let multiply = (a,b) =>{
//   return a*b;
// }

// function welcome(name){
//   console.log(name)
// }
// welcome("muskan")

// function demo(a,b,c){}
// demo(1,2)

// function sayHi(name = "muskan"){
//   console.log("hi",name)
// }
// sayHi()

// function absv(a,b,c,...val){
//   console.log(val)
// }
// absv(1,2,3,4,5,6)

// function number(...val){
//   let total = 0
//   val.forEach(function(score){
//     total = total + score
//   })
//   return total
// }
// console.log(number(10,20,34,56))

// function checkAge(age){
//   if(age<18) return "to young"
//   return "allowed"
// }
// console.log(checkAge(12))

// function f(){
//   return;
// }
// console.log(f())

// Pass a function into another function and execute if inside

// function abcd(val){
//   val()
// }
// abcd(function(){
//   console.log("hello")
// })

// what is heigher order function

// function num(val){
//   val()
// }
// num(function(){

// })

// convert the above function into a pure function

// let total = 0
//  function addTotal(num){
//   let newTotal = total
//   newTotal +=total
//  }

// what is a closure? when is it created1?

// function number(){
//   let val = 0
//   return function(){
//     console.log(val)
//   }
// }

// function outer(){
//   let count = 0
//   return function (){
//     count ++
//     console.log()
//   }
// }
// const counter = outer()
// counter()
// counter()

// convert this normal function into an iife
// (function init(){
//   console.log("helo initialixes")
// })()

// what is the use of iife name one real world use case
// (function(){
//   let score = 0
// })()

// not hosting

// greet()
// var greet = function(){
//   console.log("hello")
// }

// yes hosting

//  greet()
// function greet(){
//   console.log("hello")
// }

// write a BMI Calculator

// function bmi(weight, height){
//   return weight / (height * height)
// }
// console.log(bmi(40,4.5).toFixed(2))

// create a reusable discount calculator (hof)

// function discountCalculator(discount){
//   return function (price){
//     return price - price * (discount / 100)
//   }
// }
// let ten =  discountCalculator(10)
// let twenty = discountCalculator(20)

// console.log(ten(1200))
// console.log(twenty(1200))

// counter clouser
// function counter(){
//   let count= -1
//   return function (){
//     count++
//     return count
//   }
// }
// let c = counter()
// console.log(c())
// console.log(c())
// console.log(c())
// console.log(c())

// let d = counter()
// console.log(d())
// console.log(c())

// create a pure function to transform a value

// function double(val){
// return val*3
// }
// console.log(double(10))

// use iife to isolate variables

// (function (){
//   const password = "secret password"
//   console.log(1245)
// })()

// ,,,,,,,,,,,,,,,,basics function
// function hello(){
//   console.log("hello muskan")
// }
// hello()

// function sum(){
//   console.log(20+30)
// }
// sum()

// function Bolean(){
//   console.log(true&&false)
// }
// Bolean()

// function or(){
//   console.log(true||false)
// }
// or()

// parameter(name) argument(you pass)
// function greet(name) {
//   console.log("hello" + name)
// }
// greet("muskan muje maro")

// function num(val){
//   console.log(20 + val)
// }
// num(30+40+79)

// function num1(name){
//   console.log(true + name)
// }
// num1(false)

// function add(a,b){
// return a+b
// return c+d

// }
// let total = add(10,5)
// let sum = add(10,50)
// console.log(total)
// console.log(sum)

// function multiply(a,b){
//   return a *b

// }
// function greet(name) {
//   console.log("Hello " + name);
// }

// console.log(greet("Muskan"));

// function num(a,b){
//   return a*b
// }
// console.log(num(12,23))

// function num(val) {
//   console.log(20 + val);
// }
// num(30 + 40 + 79);

// function num(val) {
//   let num1 = 20;
//   console.log(num1);
// }

// function fn(a, b) {
//   return a + b;
// }
// console.log(fn(100, 20));


// function grret(name){
//   console.log("hello"+name)
// }
// grret("muskan")


function multiply(a,b){
  return a*b
}
console.log(multiply(10,20))


function isAdult(age){
  return age>=18
}
console.log(isAdult(20))
console.log(isAdult(10))


function getFirstChar(Name){
  return Name.charAt(0)
}
console.log(getFirstChar("Muskna"))


function findLargest(a,b,c){
  return Math.max(a,b,c)
}
console.log(findLargest(10,20,50))



