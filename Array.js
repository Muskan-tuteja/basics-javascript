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


//  some 

// let arr = [10,20,30,40];
// let som=arr.some(function(val){
//   return val >90;
// })
// console.log(som)


// let num = [1,3,7,10,15]

// let hasEven = num.some(function(val){
//   return num %2 ===0
// })
// console.log(hasEven)

// let cart = [
//   {name : "muskan",price:30},
//   {name : "musn",price:30},
//   {name : "mus",price:30}
// ]
// let expensiveItem = cart.some(item => item.price >100)
// console.log(expensiveItem)


// every

// let arr = [60,20,30,40]

// let eve = arr.every(function(val){
//   return val >15
// })
// console.log(eve)
// let arr = [10,20,30,40]

// let eve = arr.every(function(val){
//   return val >15
// })
// console.log(eve)

// let cart = [
//   { name: "Shirt", price: 1499 },
//   { name: "Shoes", price: 899 },
//   { name: "Cap", price: 299 }
// ];
// let count = cart.every(function(erw){
//   return erw.price<1000
// })
// console.log(count)

// fill

// let arr = [1,2,3,4,5,6]
// arr.fill(0)
// console.log(arr)

// let board = new Array(3).fill(null)
// console.log(board)


// spread

// let arr = [1,2,3,4,5,6,7]
// let arr2 = [...arr]
// console.log(arr2)


//....................... Practice question arry 

// let fruit = [ "apple", "bnana", "gurve"]
// let furits=fruit[1]
// console.log(furits)


// let furits = ["apple", "Banan",]
// furits.push("Mangi")
// furits.unshift("origon")
// console.log(furits)

// let num =[1,2,3,7]
// num.pop()
// num.push(9)
// console.log(num)



// let names =[ "aplllw","bnana",,"kiwwi"]
// let remove= names.pop()
// console.log(remove)
// console.log(names)


// let colors = ["green","yelllow","blue"];
// colors.splice(1,0,"red","white")

// console.log(colors)

// let items = [1,2,3,4,5,6]
// let newarr = items.slice(2,4)
// console.log(newarr)

// let names = ["muskan","asha","musu","bahi"];
//  names.sort().reverse()
//  console.log(names)


// let arr = [1,2,34,67]
// let arrr= arr.map(function(val){
//   return val*val
// })
// console.log(arrr)


// let arr = [2,3,4,5,12,34]
// let arrs = arr.filter(function(val){
//   return val>10
// })
// console.log(arrs)

// let arr = [12,2,4,5,6]
// let sum = arr.reduce(function(aru,val){
//   return aru+val
// },0)
// console.log(sum)

// let arr = [10,2,3,20 ]
// let sum = arr.find(function(val){
//   return val<10
// })
// console.log(sum)

// let mark = [20,30,35,67]
// let marks = mark.some(function(val){
//   return val<35
// })
// console.log(marks)

// let marks = [1,2,3,4,12]
// let markss = marks.some(function(val){
//   return val>10
// })
// console.log(markss)



// let even = [ 2,5,4,6,8,10]
// let evenn = even.every(function(val){
//   return val % 2===0
// })
// console.log(evenn)

// let a = [1,2]
// let b = [3,4]


// let c = [...a,...b]
// console.log(c)


// let count = ["us","uk","amcrican"]

// let counst = ["india",...count]
// console.log(counst)

// let arr= [1,2,30];
// let arr2 = [...arr]
// console.log(arr2)
// console.log(arr)

// let arr = ["muskan","mahi"]
// let arrs = arr.sort()
// console.log(arrs)

// let num = [3,5,7,2,8]
// let sum = num.reduce(function(val){
//   return val+val
// })
// console.log(sum)

// let arr = [4, 9, 1, 17, 3];
// let max =Math.max(...arr)

// console.log(max)

// let arr = [10, 20, 30, 40, 50];
// let arr1 = arr.reverse()

// console.log(arr1)

// let arr = [11, 24, 7, 8, 15, 30];
// let arr1 = arr.filter(function(val){
//   return val % 2===0
// })
// console.log(arr1)

// let arr = [1, 2, 2, 3, 3, 4];
// let uniqueArr = [...new Set(arr)];
// console.log(uniqueArr); 

// let arr = [12, 7, 9, 24, 18, 3, 5, 22];
// let arr1 = arr.filter(function(val){
// return val % 2 ===0 ,val %2 !== 0
// })
// console.log(arr1)


// let arr = [45, 22, 89, 75, 89, 30];
// let uniqueArr = [...new Set(arr)];
// uniqueArr.sort((a, b) => b - a);
// let secondLargest = uniqueArr[1];
// console.log("Second Largest:", secondLargest);


// let arr = [45, 12, 78, 34, 22];

// let arr1 = arr.sort(function(a,b){
//   return a-b
// })
// console.log(arr1)

// let arr = [23, 7, 45, 2, 89, 15];
// let arr1 = Math.min(...arr)

// console.log(arr1)

// let arr = [11, 24, 35, 40, 55, 66, 73];
// let arr1 = arr.filter(function(val){
//   return val%2 ===0
// })
// console.log(arr1)

// let arr = [-5, 12, -3, 8, -9, 0, 7];
// let positiveCount = arr.filter(val => val > 0).length;
// let negativeCount = arr.filter(val => val < 0).length;
// console.log("Positive:", positiveCount);  
// console.log("Negative:", negativeCount);


// let arr = [10, -3, 7, -8, -2, 5, -1];
// let negativeCount = arr.filter(function(val){
//   return val <0
// })
// let sum = negativeCount.reduce(function(acc,val){
//   return acc +val
// })

// console.log("sum negativeCount:" ,sum)

// let num = 5473;
// let sum2=num.toString().length
// console.log(sum2)

// let arr = [12,23,45]

// arr.forEach(function(val){
//   console.log(val.toString())
// })
// console.log(arr)
// let arr = [12,23,45]

// let arr2=arr.map(function(val){
//   console.log(val.toString())
// })
// console.log(arr2)

// let arr = [12,23,45]

// let arr2=arr.map(function(val){
//   return(val.toString())
// })
// console.log(arr2,"muskan")

// let arr = [23,24,57]

// let name = arr.map(function(val){
//   return val.toString() + "muskan"
// })
// console.log(name)


let arr =[10,20,30,,40,,67]

let arr2 = arr.indexOf(function(val){
  return val <100
})
console.log(arr2)
