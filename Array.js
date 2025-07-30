// let marks = [10,20,30,40]
// console.log(marks)
// console.log(marks[0])


// let ar=new Array(10)
// ar[0]=10
// console.log(ar)



// let arr = Array.of(4);
// console.log(arr)


// modified of array
// kon index update karna chate ho
// let arr = [1,2,4,56]
// arr[3] = 23
// console.log(arr)

// tokardo me define kar de ga muksn ko
// converts string to an array of charactet(Array.from)
// let str = "muskan"
// let ar = Array.from(str)
// console.log(ar)


// let arr1 = [10,2,3,]
// let arr2 = [20,3,5,6]

// let ar=[arr1,arr2]
// console.log(ar)


// Array Method 
// 1 push

// let arr = [1,2,3,4]
// arr.push(23)
// console.log(arr)

// 2 pop
// let arr = [10,20,70,7000]
// arr.pop()
// console.log(arr)


// 3 shift
// let shift = [20,3,4,5,6]
// shift.shift()
// console.log(shift)

// 4 unshift
// let shift = [20,3,4,5,6]
// shift.unshift(0,1,2,3)
// console.log(shift)


// 5 splice
// let arr=[2,3,4,56,23]
// arr.splice(2,3)
// console.log(arr)

// let arr=[1,2,3,4]
// arr.splice(1,2)
// console.log(arr)


// let colors = ["red","blue","green","yellow"]
// colors.splice(1,1,"orange")
// console.log(colors)


// remove value dega output me splice ki help se
// let nums = [10, 20, 30, 40];
// let removed = nums.splice(1, 2);
// console.log(removed); 


// 6 slice
// let nums = [10,20,30,40,50,58]
// let part = nums.slice(1,6)
// console.log(part)
// console.log(nums)

// let num = [10,20,30]
// let part = num.slice(0,2)
// console.log(part)

// 7 reverse
// let num = [10,20,30,109];
// num.reverse()
// console.log(num)

// 8 sort
// let names = ["muskan","apple","bnana","coconate"]
// names.sort()
// console.log(names)

// number sort is function degine

// let num = [10,9,34,5,67]
// num.sort((a,b)=>a-b)
// console.log(num) (Ascending)

// let num = [10,9,34,5,67]
// num.sort((a,b)=>b-a)
// console.log(num)//(Decending)

// 9 concat
// let sum1 = [10,30,2,36]
// let sum2 = [2,4,5,6]
// let sum = sum1.concat(sum2)
// console.log(sum)


// 10 for Each 
// let ar = [10,20,30]
// ar.forEach(function fn(item){
//   console.log(item)
// })
// let ar = [10,20,30,78,90]
// ar.forEach(item => console.log(item))

// ar.forEach(function(item,i,ar){
//   console.log(ar)
// })
// ar.forEach((item, i, arr) => console.log(item +" "+ i+ " "+ arr));


// let arr = [11,23,24,56]

// arr.forEach (val=>{
//   console.log(val+5)
// })

// let number = [2,4,6,8,10]
// number.forEach(function(val){
//   console.log(val+2)
// })

// let names = ["Muskan", "Aarav", "Diya"];
// names.forEach(function(val){
// console.log("hello"+val)
// })

// let marks =  [90, 85, 70, 60]
// marks.forEach(function(num){
//   if(num>80){
// console.log(num)
//   }
  
// })


// let items = ["pen", "pencil", "eraser"]
// items.forEach(function(items,i){
//   console.log( i+ ":" + items)
// })

// let fruits = ["apple", "banana", "grapes"]
// fruits.forEach(function(item,i){
//   console.log(i + ":" + item)
// })

// let fruits = ["apple", "banana", "grapes"]
// fruits.forEach((item,i,arr)=>{
//   // console.log(i + " : " + fruits + " : " +arr)
//   console.log(`${i} : ${item} : ${arr}`);
// })


// let marks = [90, 75, 88, 65, 49]
// marks.forEach(function(num){
//   if(num >=75){
//     console.log(num + " :pass")
//   }else{
//     console.log(num + " :fail")
//   }
// })
  
//  let marks = [90, 75, 88, 65, 49]
//  marks.forEach((num)=>{
//   console.log(num >= 75 ? num + " :pass" : num + " : fail")
//  })


// let names = ["muskan", "rahul", "diya"]
// names.forEach(function(val){
//   console.log(val.toUpperCase())
// })


// let prices = [50, 120, 80, 200]
// prices.forEach(function(val){
//   if(val>100)
//   console.log(val)
// })

// let scores = [95, 65, 80, 45, 77]
// scores.forEach(function(val){
//   console.log(val+5)
// })

// let cities = ["delhi", "mumbai", "goa"]
// cities.forEach(function(name){
//   console.log(name + " : " + name.length + " letters")
// })


// map

// let arr = [11,2,3,4,56]

// let newarr = arr.map(function(val){
//   return 12
// })
// console.log (newarr)
// console.log(arr)


// let number = [1,2,3,4]

// let diuble = number.map(function(num){
//   return num*2
// })
// console.log(diuble)


// let arr = [11,62,3,5,56]

// let newarr = arr.map(function(val){
//   if(val>10) return val
// })
// console.log(newarr)



// filter

// let arr = [1,2,3,4,5,6,7,8]
// let newarr = arr.filter(function(val){
//   if(val>4) return true
// })

// console.log(newarr)

// let numbers =[1,2,3,4,5,6,7] 

// let evenNumber = numbers.filter(function(num){
//   return num%2===0
// })
// console.log(evenNumber)


// let ages = [12, 18, 25, 14, 30];

// let adults = ages.filter (age=> age >=18)

// console.log(adults)


// reduce
// let arr = [1,2,,3,4,5,6]

// let ans = arr.reduce(function(accumulator,val){
//   return accumulator + val 
// })

// console.log(ans)

// let arr = [1,2,3,4,5]

// let results = arr.reduce((acc,curr)=>acc+curr,0)

// console.log(results)


// let values = [10, 45, 8, 70, 20];

// let max = values.reduce((acc, curr) => {
//   return curr > acc ? curr : acc;
// });

// console.log(max);


// let nums = [2,3,4]

// let product = nums.reduce((acc,curr)=> curr*acc)

// console.log(product)


// let nums = [50,10,5,25,100]

// let min = nums.reduce((acc, curr) => curr < acc ? curr : acc);

// console.log(min)

// let words = ["apple", "banana", "grapes", "kiwi", "watermelon"];

// let longest = words.reduce((acc, curr) => {
//   return curr.length > acc.length ? curr : acc;
// });

// console.log(longest);

// find


// let numbers = [3, 7, 8, 9, 12];

// let firstEven = numbers.find(num => num % 2 === 0);

// console.log(firstEven);

// let students = [
//   { name: "Rahul", age: 20 },
//   { name: "Diya", age: 18 },
//   { name: "Muskan", age: 22 }
// ];
// let result = students.find(student => student.name === "Muskan");

// console.log(result);


