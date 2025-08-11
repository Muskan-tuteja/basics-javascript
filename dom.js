// let hel = document.getElementById("hello")
// console.log(hel);

// let hi=document.querySelector("he")
// console.log(hi)
// let hi = document.querySelectorAll("he")
// console.log(hi)
// let hi = document.getElementsByClassName("he")
// console.log(hi)

// let h1 = document.querySelector("h1")
// h1.textContent="hello muskan you"
// console.dir(h1)

// let h1 = document.querySelector("h1")

// // h1.innerHTML= "<i>hello0</> hidden=true"
// h1.innerText= "hello0hidden=true"

// console.dir(h1)

// let a = document.getElementById("mylink")
// a.setAttribute("href", "https://google.com")

// let img = document.querySelector("img")
// img.setAttribute("src","https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg")

// let a = document.querySelector("a")
// console.log(a.getAttribute("href"))

// let data = document.querySelector("div")
// data.setAttribute("data-user","mahi me kon")
// console.log(data)

// let a = document.getElementById("mylink")
// a.removeAttribute("href")
// console.log(a)

// let h1 = document.createElement("h1")
// h1.textContent = "hello isha kahe ho"

// document.querySelector("body").prepend(h1)

// append child............

// parent element
// const container = document.getElementById("container")

// // naya element crete karna h

// const nerAppend = document.createElement("h2")
// nerAppend.textContent = "this is new append"

// // naya element ko container mein add karna hai

// container.appendChild(nerAppend)

// prepend

// const container = document.getElementsByClassName("container")[0]

// const newPre = document.createElement("p")
// newPre.textContent = "hello and not"

// container.prepend(newPre)

// let sty = document.querySelector(".container")
// sty.style.color = "blue";
// sty.style.fontFamily="Gilroy";

// add style
// let h1 = document.querySelector("h1")
// h1.classList.add("container")
// let h1 = document.querySelector("div")
// h1.classList.remove("container")
// let h1 = document.querySelector("div")
// h1.classList.toggle("container")

// button create
// let btn = document.querySelector("#btn")

// btn.onmouseover = () =>{
//   btn.style.backgroundColor = "orange"
// }
// btn.onmouseout = () =>{
//   btn.style.backgroundColor = "lightblue"
// }

// let text = document.getElementById("text")
// let btn = document.getElementById("btn")

// btn.addEventListener("click",()=>{
//   text.classList.toggle("active")
// })

// let h1 = document.querySelector("#heading")
// h1.textContent="helo me thik hu !"

// let lis = document.querySelectorAll("li")
// for(let i =0; i<lis.length; i++){
//   console.log(lis[i].textContent)
// }

// let h1 = document.getElementsByClassName("heading");
// for (let i = 0; i < h1.length; i++) {
//   h1[i].innerHTML = "<h3>helo hi muskan</h3>";
// }
// let p = document.getElementById("change")
// p.innerText= "helo hash kase"

// let ul = document.querySelector("ul")
// let li = document.createElement("li")
// let p = document.createElement("p")

// li.textContent = "new task"
// p.textContent = "helo muskan"
// ul.appendChild(li)
// ul.prepend(p)

// let div = document.getElementById("box")
// div.style.backgroundColor = "blue"
// div.style.color = "white"


// let ul = document.getElementById("list")
// let newli = document.createElement("li")
// newli.textContent = "item3"
// ul.appendChild(newli)

// let p = document.getElementById("msg")
// p.innerHTML= "<p>Hello Muskan</p>"

// let h1 = document.getElementById("title")
// h1.textContent = "hello Muskan"

// let p = document.querySelector("#msg")
// p.style.backgroundColor = "yellow"

// let ul = document.getElementById("list")
// let li = document.createElement("li")
// li.textContent="banana"
// ul.appendChild(li);

// let p = document.querySelector("#msg")
// p.textContent="hello muskan"


// let img = document.getElementById("photo")
// img.src="new.jpg"

// let input = document.getElementById("name")
// input.setAttribute ("value", "helo muksa")

let input = document.getElementById("name")
  input.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
