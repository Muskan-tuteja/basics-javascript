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

