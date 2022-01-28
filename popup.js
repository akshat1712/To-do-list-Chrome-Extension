document.getElementById("submitbutton").addEventListener("click", taskPutter);
document.getElementById("resetbutton").addEventListener("click", taskremover);

document.addEventListener("DOMContentLoaded", () => {
  fetchItem();
});

function fetchItem() {
  let num = parseInt(localStorage.getItem("number"));
  console.log(num);
  for (let key = 1; key <= num; key++) {
    let text = localStorage.getItem(key);
    text = newlinetext(text);
    let task = document.createElement("p");
    task.appendChild(document.createTextNode(key + ". " + text));
    document.getElementById("rem_task").appendChild(task);
  }
}
function taskPutter() {
  let text = document.getElementById("text").value;
  if (text == "") return;

  let num = parseInt(localStorage.getItem("number"));
  if (num == NaN) {
    num = 0;
  }
  num += 1;
  localStorage.setItem("number", num);
  let task = document.createElement("p");
  task.innerHTML = newlinetext(num + ". " + text);

  document.getElementById("rem_task").appendChild(task);
  document.getElementById("text").value = "";
  localStorage.setItem(num, text);
}

function taskremover() {
  let num = parseInt(localStorage.getItem("number"));
  document.getElementById("rem_task").innerHTML = "";
  num = 0;
  localStorage.setItem("number", num);
}

function newlinetext(text) {
  var count = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] == " ") count++;

    if (count == 7) {
      text = text.substring(0, i) + "\n" + text.substring(i, text.length);
      count = 0;
    }
  }
  return text;
}
