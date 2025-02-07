//Selecting elemements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
//Creating new elements
const li = document.createElement("li");
const deleteButton = createElement("button");
//Populating Elements
li.textContent = input.value;
deleteButton.textContent = "❌";

li.append(deleteButton);
list.append(li);