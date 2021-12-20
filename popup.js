document.getElementById("submitbutton").addEventListener("click", taskPutter);
document.getElementById("resetbutton").addEventListener("click", taskremover);

document.addEventListener("DOMContentLoaded", ()=>{
  fetchItem();
})

function fetchItem(){
  let num=parseInt(localStorage.getItem('number'));
  console.log(num);
  for( let key=1;key<=num;key++){
      let text=localStorage.getItem(key);
      console.log('Value currently is ' + text);
      let task = document.createElement("p");
      task.appendChild(document.createTextNode(key + ". " + text));
      document.getElementById("rem_task").appendChild(task);
  }
}
function taskPutter() {
  let text = document.getElementById("text").value;
  if (text == "") return;

  let num=parseInt(localStorage.getItem('number'));
  if(num==NaN){
    num=0;
  }
  console.log(num);
  num += 1;
  localStorage.setItem('number',num);
  let task = document.createElement("p");
  task.appendChild(document.createTextNode(num + ". " + text));
  document.getElementById("rem_task").appendChild(task);
  document.getElementById("text").value = "";
  localStorage.setItem(num,text);
}

function taskremover() {
  let num=parseInt(localStorage.getItem('number'));
  console.log(num);
  document.getElementById("rem_task").innerHTML = "";
  console.log("To-do list is removed");
  num=0;
  localStorage.setItem('number',num);
}