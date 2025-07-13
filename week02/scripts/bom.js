const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const listElement = document.getElementById("list");

buttonElement.addEventListener("click", () => {
    if (inputElement.value.trim() === "") {
        inputElement.value = ""; // Clear the input field
        inputElement.focus(); // Set focus back to the input field
        return;
    }
    else {
        const listItemElement = document.createElement("li");
        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.setAttribute("type", "button");
        listItemElement.textContent = inputElement.value;
        deleteButtonElement.textContent = " ❌";
        deleteButtonElement.setAttribute("aria-label", "Remove scripture reference"); // for screen readers

        listItemElement.appendChild(deleteButtonElement);
        listElement.append(listItemElement);
        inputElement.value = "";
        inputElement.focus();

        deleteButtonElement.addEventListener("click", function () {
            listElement.removeChild(listItemElement);
            inputElement.focus();
        })
    }
});

// deleteButtonElement.addEventListener("click", (event) => {
//     listElement.removeChild(target);
//     inputElement.focus();
// });
