let form = document.querySelector(".container");


function send(button) {
  const parentDiv = button.parentElement;
  const msg = parentDiv.querySelector(".otp-msg");

  // Button hide
  button.style.opacity = "0";
  

  // Message show
  msg.style.opacity = "1";
   

  // 3 sec baad wapas button show
  setTimeout(() => {
    msg.style.opacity = "0";
    button.style.opacity = "1";
  }, 3000);
}

document.querySelectorAll(".otp").forEach((btn) => {
  btn.addEventListener("click", function () {
    send(this);
  });
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  alert("Successfully Registered!");
});
