// function adcd (){
//   let a =13
//   return function(){
//     console.log(a)
//   }
// }
// let fnc = adcd()
// fnc()


// private counter

// function counter(){
//   let count = 0

//   return function(){
//     count++
//     console.log(count)
//   }
// }
// let c1 = counter()
// c1()
// c1()
// c1()
// c1()

// let c2 = counter()
// c2()
// c2()
// c2()
// c2()
// c2()


// function clickLimmit(){
//   let click = 0
//   return function(){
//     if(click<5){
//       click++
//       console.log(`clicked : ${click} times`)
//     }else{
//       console.error("LIMIT EXCEEDEDE.TRY AFTER SOME TIME")
//     }
//   }
// }
// let func = clickLimmit()
// func()
// func()
// func()
// func()
// func()
// func()



// closures project

function createToaster(config){
  return function(str){
    let div = document.createElement("div")
    div.textContent = str;
   div.className = `toaster-pop ${config.theme}`;

    document.querySelector(".parent").appendChild(div)
    setTimeout(()=>{
      document.querySelector(".parent").removeChild(div)

    },config.duration*1000)

  }

}
let toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme : "dark" ,
  duration : 3,
  
})
// kuch chalo to ue chal jye
toaster("Download Done")
setTimeout(()=>{
  toaster("muskan hello!")
},2000)
setTimeout(()=>{
  toaster("suceesfull done")
},1500)