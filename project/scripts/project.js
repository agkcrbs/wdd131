//
// Get date for footer
//

const today = new Date();
const currentyear = document.getElementById("currentyear");
currentyear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.append(document.lastModified);

//
// Expandable menu
//

// Get the elements to toggle
const downSvgElement = document.getElementById("down-svg");
const upSvgElement = document.getElementById("up-svg");
const menuElement = document.getElementById("stacked-menu");
const mainElement = document.getElementById("main-expander");
const heroElement = document.getElementById("hero-container");
const heroImageElement = document.getElementById("hero-image");

// Set the clicks to toggle the elements
downSvgElement.addEventListener("click", () => {
    // Toggle a CSS-modified class
    downSvgElement.classList.toggle("show");
    menuElement.classList.toggle("show");
    upSvgElement.classList.toggle("show");
    mainElement.classList.toggle("show");
});

upSvgElement.addEventListener("click", () => {
    downSvgElement.classList.toggle("show");
    menuElement.classList.toggle("show");
    upSvgElement.classList.toggle("show");
    mainElement.classList.toggle("show");
});
