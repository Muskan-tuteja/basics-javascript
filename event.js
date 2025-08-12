// let h1 = document.querySelector("h1")

// h1.addEventListener("click", function(){
//   h1.style.color = "blue"
// })

// let but = document.querySelector("button")

// but.addEventListener("dblclick" , function(){
//   but.style.color = "green"
//   but.style.backgroundColor = "yellow"
// })

// let but = document.querySelector("button")

// but.addEventListener("click",function(){
//   alert("button clicked")
// })
// let but = document.querySelector("button").removeEventListener("click",function(){
//   alert("button clicked")
// })

// function handleClick() {
//   alert("button click");
// }

// const btn = document.querySelector("button");
// btn.addEventListener("dblclick", handleClick);
// btn.removeEventListener("dblclick", handleClick);

// let inp = document.querySelector("input")

// inp.addEventListener("input", function(evt) {
//   console.log(evt.data);

// }) ......is me backspace kare se null ata h

// let inp = document.querySelector("input")
// inp.addEventListener("change", function(evt){
//   if(evt.data !==null){
//     console.log(evt.data)
//   }
// })

// let sel = document.querySelector("select")
// let device= document.getElementById("device")

// sel.addEventListener("change", function(dets){
//   device.textContent = `${dets.target.value} Device Selected`
//   console.log(dets.target.value)
// })

// keybown
// let h1 = document.querySelector("h1")
// window.addEventListener("keydown", function(dets){
// if(dets.key === " "){
//   h1.textContent = "SPC"
// }
// else{
//   h1.textContent= dets.key
// }

// })

// document.getElementById("myInput").addEventListener("change", function() {
//   console.log("Input changed and lost focus");
// });

// document.getElementById("myTextarea").addEventListener("change", function() {
//   console.log("Textarea changed and lost focus");
// });

// document.addEventListener("keyup", (e) => {
//   console.log("Keyup:", e.key);
// });

// document.addEventListener("keydown", (e) => {
//   console.log("Keydown:", e.key);
// });

// button file

// let btn = document.querySelector("#btn")
// let fileinp = document.querySelector("#fileinp")

// btn.addEventListener("click",function(){
//   fileinp.click()
// })

// fileinp.addEventListener("change",function(evt){
//   const file = evt.target.files[0]
//   if(file){
//     btn.textContent = file.name
//   }
// })

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main")

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute(
    "src",
   inputs[0].value
  );

  let h3 = document.createElement("h3");
  h3.textContent = inputs[1].value
  let h5 = document.createElement("h5");
  h5.textContent =  inputs[2].value
  let p = document.createElement("p");
  p.textContent =  inputs[3].value

 profile.appendChild(img)
 card.appendChild(profile)

 card.appendChild(h3)
 card.appendChild(h5)
 card.appendChild(p)

 main.appendChild(card)

 inputs .forEach(function(inp){
  if(inp.type !=="submit"){
inp.value ="";
  }
  
 })
});
