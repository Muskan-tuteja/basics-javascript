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

// form ki ander tytpe kiya tab imh name cousre ye sb ate hb
// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main")

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   let card = document.createElement("div");
//   card.classList.add("card");

//   let profile = document.createElement("div");
//   profile.classList.add("profile");

//   let img = document.createElement("img");
//   img.setAttribute(
//     "src",
//    inputs[0].value
//   );

//   let h3 = document.createElement("h3");
//   h3.textContent = inputs[1].value
//   let h5 = document.createElement("h5");
//   h5.textContent =  inputs[2].value
//   let p = document.createElement("p");
//   p.textContent =  inputs[3].value

//  profile.appendChild(img)
//  card.appendChild(profile)

//  card.appendChild(h3)
//  card.appendChild(h5)
//  card.appendChild(p)

//  main.appendChild(card)

//  inputs .forEach(function(inp){
//   if(inp.type !=="submit"){
// inp.value ="";
//   }

//  })
// });

// let main = document.querySelector("#main")

// main.addEventListener("mouseover",function(){
//   main.style. backgroundColor = "blue"
// })

// main.addEventListener("mouseout",function(){
//   main.style.backgroundColor = "green"
// })

// let main = document.querySelector("#main")
// window .addEventListener("mousemove", function(dets){
//   main.style.top = dets.clientY + "px"
//   main.style.left = dets.clientX + "px"

// })

// let main = document.querySelector("#main")

// main.addEventListener("click", function (dets){
//   console.log(dets)
// })

// let btn = document.getElementById("loadData");
// let status = document.getElementById("status");

// btn.addEventListener("click", function () {
//   status.textContent = "Loading data... ";

//   // Promise create
//   let fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = true; // इसे false करके error देख सकते हो

//       if (success) {
//         resolve("Data successfully loaded! ");
//       } else {
//         reject("Failed to load data ");
//       }
//     }, 2000); // 2 second delay
//   });

//   fetchData
//     .then(result => {
//       status.textContent = result;
//       status.style.color = "green";
//     })
//     .catch(error => {
//       status.textContent = error;
//       status.style.color = "red";
//     });
// });

// document.getElementById("child").addEventListener("click", function() {
//   console.log("Child clicked");
// });

// document.getElementById("parent").addEventListener("click", function() {
//   console.log("Parent clicked");
// });

// document.body.addEventListener("click", function() {
//   console.log("Body clicked");
// });

// document.querySelector("#mus").addEventListener("click",function(){
//   alert("clicked")
// })

// let ul = document.querySelector("ul")
//  ul.addEventListener("click", function(evt){
//   evt.target.classList.toggle("lt")
//  })

// document.getElementById("grandparent").addEventListener("click", function() {
//   console.log("Grandparent capturing");
// }, true); // true = capturing mode

// document.getElementById("parent").addEventListener("click", function() {
//   console.log("Parent capturing");
// }, true);

// document.getElementById("child").addEventListener("click", function() {
//   console.log("Child clicked");
// });

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener(
//   "click",
//   function () {
//     console.log("button clicked");
//   },
//   true
// );
// c.addEventListener("click", function () {
//   console.log("c clicked");
// });
// b.addEventListener("click", function () {
//   console.log("b clicked");
// },true);
// a.addEventListener(
//   "click",
//   function () {
//     console.log("a clicked");
//   },
//   true
// );

// let inp = document.querySelector("input")
// let span = document.querySelector("span")
// inp.addEventListener("input",function(){
//  span.textContent= 20- inp.value.length

//  span.textContent = left

//  if(left <0){
//   span.style.color = "red"
//  } else{
//   span.style.color ="white"
//  }
// })
fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    document.body.appendChild(container);

    data.recipes.forEach((recipe) => {
      // card div
      let card = document.createElement("div");
      card.style.border = "1px solid #ccc";
      card.style.padding = "10px";
      card.style.margin = "10px";
      card.style.width = "200px";
      card.style.textAlign = "center";
      card.style.borderRadius = "8px";
      card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

      // image
      let img = document.createElement("img");
      img.src = recipe.image;
      img.alt = recipe.name;
      img.style.width = "100%";
      img.style.borderRadius = "8px";

      // name
      let title = document.createElement("h3");
      title.textContent = recipe.name;
      title.style.fontSize = "16px";

      // add to card
      card.appendChild(img);
      card.appendChild(title);

      // add card to container
      container.appendChild(card);
    });
  })
  .catch((error) => console.error(error));


