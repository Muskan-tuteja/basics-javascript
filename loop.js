// let fruits = ["apple","banana","mango"]

// for (let fruit of fruits){
//   console.log(fruit)
// }


// let namus = "muskan"

// for (let char of namus){
//   console.log(char)
// }


let person = {
  name: "Muskan",
  age: 22,
  city: "Delhi"
};

for (let key in person) {
  console.log(key, ":", person[key]);
}
