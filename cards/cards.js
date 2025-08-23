function searchValue() {
  let searchValue = document.querySelector(".search-box input").value.toLowerCase();
  let items = document.querySelectorAll(".Student");
  

  let alertt = false; // track karega ki kuch mila ya nahi

  items.forEach((item) => {
    let h1 = item.querySelector("h1").textContent.toLowerCase();

    if (h1.includes(searchValue)) {
      item.style.display = "";
      alertt = true;
    } else {
      item.style.display = "none";
    }
  });

  // agar kuch bhi match nahi hua
  if (!alertt && searchValue !== "") {
    alert("No student found!");
  }
}


