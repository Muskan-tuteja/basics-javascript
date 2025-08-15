// // // // let clear = setTimeout(()=>{
// // // //   console.log("hello muskan 2 second bad ye message ayaga")
// // // // },2000)
// // // // clearTimeout(clear)

// // // // let tm = setInterval(() => {
// // // //     console.log("Har 3 second me ye message print hoga.");
// // // // }, 3000); // 3000ms = 3 seconds

// // // // clearInterval(tm)

// // // ----------- Timeout ----------- //
// //         // let timeoutId;
// //         const timeoutMsg = document.getElementById("timeoutMsg");

// //         document.getElementById("startTimeout").addEventListener("click", () => {
// //             timeoutMsg.textContent = "Waiting for 5 seconds...";
// //             timeoutId = setTimeout(() => {
// //                 timeoutMsg.textContent = "Timeout Complete! ✅";
// //             }, 5000);
// //         });

// //         document.getElementById("stopTimeout").addEventListener("click", () => {
// //             clearTimeout(timeoutId);
// //             timeoutMsg.textContent = "Timeout Stopped ❌";
// //         });

// //         // ----------- Interval ----------- //
// //         let intervalId;
// //         let count = 0;
// //         const counterDisplay = document.getElementById("counter");

// //         document.getElementById("startInterval").addEventListener("click", () => {
// //             intervalId = setInterval(() => {
// //                 count++;
// //                 counterDisplay.textContent = count;
// //             }, 1000);
// //         });

// //         document.getElementById("stopInterval").addEventListener("click", () => {
// //             clearInterval(intervalId);
// //         });

// // // let count = 20

// // // let intervalId = setInterval(function(){
// // //   if(count>=10){
// // //     console.log(count)
// // //     count--
// // //   } else clearInterval(intervalId)
// // // },1000)

// let count = 0;
// let progress = document.querySelector(".progress-bar");
// let percentText = document.querySelector("#percentText");
// let stopInterval = document.querySelector("#stopInterval")

// let intervalId=setInterval(() => {
//   if (count < 100) {
//     count++;
//     progress.style.width = `${count}%`;
//     percentText.textContent = `${count}%`;
//   }
//   else{
//     document.querySelector("h2").textContent="Downloaded."
//     clearInterval(intervalId)
//   }
 
// }, 10000/100);

// setTimeout(()=>{
//   document.querySelector("#alertBox").style.display = "none"
// },3000)

//  document.getElementById("stopInterval").addEventListener("click", () => {
//     clearInterval(intervalId);
//   });

  

 

