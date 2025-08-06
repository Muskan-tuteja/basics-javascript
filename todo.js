let count = 1

function addItem(){

  const input1Value= document.getElementById("input1").value
  const input2Value= document.getElementById("input2").value
  const inputtimeValue= document.getElementById("inputtime").value

  const list = document.querySelector("#listItemid")
 

  list.innerHTML += `<li class="listItem">${count++}<span>${input1Value} </span><span>${input2Value}</span><span>${inputtimeValue}</span> <button onclick="deleteItem(this)">Delete</button></li>`



 
}
function deleteItem(btn) {
  btn.parentElement.remove();
  
}