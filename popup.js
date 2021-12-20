let number = 1;

document.getElementById("submitbutton").addEventListener("click", taskPutter);
document.getElementById("resetbutton").addEventListener("click", taskremover);

document.addEventListener("DOMContentLoaded", ()=>{
  for( let key in localStorage){
    let text=localStorage.getItem(key);
    let task = document.createElement("p");
    task.appendChild(document.createTextNode(number + ". " + text));
    document.getElementById("rem_task").appendChild(task);
  }
})
function taskPutter() {
  let text = document.getElementById("text").value;
  if (text == "") return;

  let task = document.createElement("p");
  task.appendChild(document.createTextNode(number + ". " + text));
  document.getElementById("rem_task").appendChild(task);
  number += 1;
  document.getElementById("text").value = "";

  chrome.storage.local.set({ number: text },()=>{
      console.log( "Text is stored in Local storage.");
  });
}

function taskremover() {
  document.getElementById("rem_task").innerHTML = "";
  chrome.storage.local.clear();
  console.log("To-do list is removed");
  number = 1;
}
