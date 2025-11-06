// console.log(0.1 + 0.2 === 0.3)

// console.log(0.1 + 0.2)

// const obj ={
//   a:1,
//   b:2
// }
// console.log(obj)

// shallow copy eng 

// const student = {
//   name:"muskan",
//   age: 22,
//   skills:{
//     fontend:"react",
//     backend:"node.js"
//   }
// }
// console.log(student)
// const copyStudent = {...student}
// copyStudent.name="muskan1234"

// copyStudent.skills.backend="java"


// console.log("orignal data:",student)
// console.log("copied:",copyStudent)

//  reduces method 

// const number = [10,20,30,40]
// const total = number.reduce((acc,num)=>acc+num,0)

// console.log(total)

// const nums = [5, 8, 2, 10, 3];

// const max = nums.reduce((acc, num) => (num > acc ? num : acc));

// console.log(max); // Output: 10


const student = [1,3,2,4]

const data = student.map(num => num *2)
console.log(data)
console.log(student)

