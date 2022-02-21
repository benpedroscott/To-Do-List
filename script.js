let listArray = []

function myFunction(){
  let x = document.getElementById("myText").value;

  if (x != ""){
    const listItem = document.createElement("li");
    const listText = document.createTextNode(x);
    const todoList = document.getElementById("todoList");

    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "x";
    buttonDelete.setAttribute("onclick", "deleteButton(this)")
    buttonDelete.setAttribute("class", "listButtons");
    buttonDelete.setAttribute("id", "deleteButton");

    const buttonDone = document.createElement("button");
    buttonDone.innerHTML = "&#10003;";
    buttonDone.setAttribute("onclick", "doneButton(this)");
    buttonDone.setAttribute("class", "listButtons");
    buttonDone.setAttribute("id", "doneButton");

    listItem.appendChild(listText);
    listItem.appendChild(buttonDelete);
    listItem.appendChild(buttonDone);
    listItem.setAttribute("id", Math.random());
    todoList.appendChild(listItem);

    document.getElementById("myText").value = "";
  }
}


function deleteList(){
  let list = document.getElementById("todoList");

  while (list.hasChildNodes()) {
  list.removeChild(list.firstChild);
  }
}

function deleteButton(elem){
  elem.parentNode.remove();
}

function doneButton(elem){
  if (elem.parentNode.style.textDecorationLine === "line-through"){
    elem.parentNode.style.textDecorationLine = "";
  } else {
    elem.parentNode.style.textDecorationLine = "line-through";
  }
}
