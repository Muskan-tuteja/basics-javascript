function addItem(){
  const input1Value= document.getElementById("input1").value
  const input2Value= document.getElementById("input2").value

  const list = document.querySelector("#listItemid")
 

  listItemid.innerHTML += `<li class="listItem"><span>${input1Value} </span><span>${input2Value}</span> <button onclick="deleteItem(this)">Delete</button></li>`



 
}
function deleteItem(button) {
  button.parentElement.remove();
}