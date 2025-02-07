//Selecting elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function(){
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        list.append(li);
        li.textContent = input.value;

        const deleteButton = document.createElement("button");
        li.append(deleteButton);
        deleteButton.textContent = "❌";

        deleteButton.addEventListener("click", function(){
            list.removeChild(li);
            input.focus();
        });

        input.value = "";
        input.focus();
        }
    
    else {
        alert("Input cannot be blank!");
        input.focus();
    }   
});