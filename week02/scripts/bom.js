const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const listElement = document.getElementById("list");
const listItemElement = document.createElement("li");
const deleteButtonElement = document.createElement("button");

listItemElement.textContent = inputElement.value;
deleteButtonElement.textContent = "❌";
deleteButtonElement.setAttribute("aria-label", "Remove scripture reference");

listItemElement.appendChild(deleteButtonElement);
listElement.append(listItemElement);