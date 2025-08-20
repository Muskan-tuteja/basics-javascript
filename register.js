let form = document.querySelector(".container");
let email = document.querySelector(".email");
let phn = document.querySelector(".phone");

// OTP send function (without alert)
function send(button) {
  const parentDiv = button.parentElement;
  const msg = parentDiv.querySelector("p");

  // Message show only in <p>, no alert
  msg.style.opacity = "1";
  msg.textContent = `OTP Sent Successfully!`;

  // Button disable temporarily
  button.disabled = true;
  button.style.background = "#aaa";

  setTimeout(() => {
    button.disabled = false;
    button.style.background = "#6a11cb";
    msg.style.opacity = "0";
  }, 3000);
}

// OTP button click
document.querySelectorAll(".otp").forEach((btn) => {
  btn.addEventListener("click", function () {
    send(this); // this = jis button pe click hua
  });
});

// Register submit event
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  alert("Successfully Registered!");
});
