// let nm = document.querySelector("#name")
// let form = document.querySelector("form")

// const { isValidElement } = require("react");

// form.addEventListener("submit",function(sub){
// sub.preventDefault()

// if(nm.value.length <= 4){
//   document.querySelector("#hide").style.display= "initial"

// }else{
//   document.querySelector("#hide").style.display= "none"
// }

// })

// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let form = document.querySelector("form");

// document.querySelector("#emailError").textContent = "";
// document.querySelector("#passwordError").textContent = "";
// document.querySelector(".sus").textContent = "";

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;

//   let emailans = emailRegex.test(email.value);
//   let passwordans = passwordRegex.test(password.value);
//   let isValid = true;

//   if (!emailans) {
//     document.querySelector("#emailError").textContent = "Email is incorrect";
//     document.querySelector("#emailError").style.display = "initial";
//     isValid = false;
//   }
//   if (!passwordans) {
//     document.querySelector("#passwordError").textContent =
//       "Password is not correct";
//     document.querySelector("#passwordError").style.display = "initial";
//     isValid = false;
//   }
//   if (isValid) {
//     document.querySelector(".sus").textContent = "Everything is correct!";
//     document.querySelector(".sus").style.display = "block";
//   }
// });

// let form = document.querySelector("#myForm");
// let nameInput = document.querySelector("#name");
// let emailInput = document.querySelector("#email");
// let successMsg = document.querySelector("#successMsg");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // Form reload होने से रोकना

//   // .value => input ka data lena
//   let nameValue = nameInput.value;
//   let emailValue = emailInput.value;

//   // .textContent => सिर्फ plain text डालना
//   successMsg.textContent =
//     "Hello " + nameValue + ", your email is " + emailValue;
// });

let form = document.querySelector("#for");
let nam = document.querySelector("#namm");
let password = document.querySelector("#passs");
let phnnumber = document.querySelector("#phnn");
let email = document.querySelector("#emii");

document.querySelector("#nameError").textContent = "";
document.querySelector("#emailError").textContent = "";
document.querySelector("#passError").textContent = "";
document.querySelector("#phoneError").textContent = "";

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;
  const nameRegex = /^[A-Za-z]{3,}$/;
  const phnRegex = /^\d{10}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);
  let nameans = nameRegex.test(nam.value);
  let phnnumberans = phnRegex.test(phnnumber.value);
  let isValid = true;

  // Name Regex (Only letters, min 3 chars)
  if (!nameans) {
    document.querySelector("#nameError").textContent =
      "Name must be at least 3 letters.";
    isValid = false;
  }

  // Email Regex
  if (!emailans) {
    document.querySelector("#emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Password Regex (min 6 chars, at least 1 letter & 1 number)
  if (!passwordans) {
    document.querySelector("#passError").textContent =
      "Password must be 6+ chars with letters & numbers.";
       document.querySelector("#passError").style.display = "initial";
    isValid = false;
  }

  // Phone Number Regex (10 digits)

  if (!phnnumberans) {
    document.querySelector("#phoneError").textContent =
      "Phone must be exactly 10 digits.";
       document.querySelector("#phoneError").style.display = "initial";
      
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});
