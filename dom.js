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

const container = document.getElementsByClassName("container")[0]


const newPre = document.createElement("p")
newPre.textContent = "hello and not" 

container.prepend(newPre)
