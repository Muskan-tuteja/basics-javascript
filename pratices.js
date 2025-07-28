function Name(muskan){
  console.log("hello"+muskan)
}
Name("musu")

function sum(a,b){
  return a+b;
  
}

console.log(sum(12,35))

function isEven(num){
return num%2 ==0
}
console.log(isEven(6))

function isOdd(num){
  return num % 3===0
}
console.log(isOdd(5))


function max(a,b){
  return a>b ? a:b
}
console.log(max(10,20))

function countLength(str){
  return str.length
}
console.log(countLength("muskan + mahi"))


function reverseString(str){
  return str.split('').reverse().join('')
}
console.log(reverseString('hello'))