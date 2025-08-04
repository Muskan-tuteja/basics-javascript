// let obj = {
//   name: "muskan",
//   age:23,
//   rollno: 21
// }

// console.log(obj.name)
// console.log(obj.age)




// let student = {
//   name: "Muskan",
//   "home address": "Delhi",
//   age: 22
// };

// console.log(student["name"]);         
// console.log(student["home address"]);  



// let marks = {
//   name :"mahi",
//   class : "cse",
//   rollno:23,
//   marks:83

// }
// console.log(marks.marks)
// console.log(marks["class"])


// let user = {
//   name: "Muskan",
//   address: {
//     city: "Delhi",
//     pin: 110001,
//     location: {
//       lat: 28.6139,
//       lng: 77.2090
//     }
//   }
// };


//deep accesss bolte h ise 
// console.log(user.address.location.lng)

// console.log(user["address"]["pin"])


// short from access karne h to
// let{lat,lng}= user.address.location



// looping
// for in

// let obj = {
//   name : "muahi",
//   age: 23,
// email:"hgbnbjgn mnkj"

// }
// for(let key in obj){
//   console.log(key,obj[key])
// }


// object key


// let person = {
//   name: "Muskan",
//   age: 22,
//   city: "Delhi"
// };

// Object.keys(person).forEach(function(key) {
//   console.log(key + ":", person[key]);
// });


// object.enteries()

// let person = {
//   name : "muskan",
//   age: 21,
//   city:"hansi"

// };
// for(let[key,value]of Object.entries(person)){
//   console.log(key + ":" ,value)
// }

// spread opertor

// let person = {
//   name : "muskan",
//   age: 21,
//   city:"hansi"

// };
// let obj2 = {...person}
// console.log(person)

// deep clone

// let obj = {
//   name : "muskan",
//   age:23,
//   emaill:"bhfnk@hnnh",
//   address :{
//     city : "mkihi"
//   }
// }
// let obj2 = JSON.parse(JSON.stringify(obj))


// optional chaining

// let obj = {
//   name : "muskan",
//   age:23,
//   emaill:"bhfnk@hnnh",
//   addressss :{
//     city : "mkihi"
//   }
// }
// console.log(obj?.address?.city)



// pretices

// let obj={
//   name:"muskani",
//   roll:34,
//   isEnrolled:45

// }
// console.log(obj.roll)

// const user = {
//   "first-name":"mkil"
// }
// user["first-name"]
// console.log(user)


// const user = {
//   age : 23
// }
// let key = "age"
// user[key]

// const Locations = {
//   city:"mkijo",
//   coordinates :{
//     late:23,
//     lng:90

//   }
// }
// Locations.coordinates.lng



// const user = {
//   "first-name" : "musjki",
// }

// let {"first-name": firstName} = user

// const course = {
//   title : "java",
//   duration : "4 weeks"
// }

// for(let key in course){
//   console.log(key)
// }


// const course = {
//   title : "java",
//   duration : "4weeks"
// }

// Object.entries(course).forEach(function(val){
//   console.log(val[0] + ":" + val[1])
// })

// const obj1 = {info:{score:34}}
// const clone = {...obj1}
// clone.info.score= 100;
// console.log(obj1.info.score)


