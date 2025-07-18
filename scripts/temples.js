
// Link elements
const navReveal = document.querySelector("nav");
const menuButton = document.getElementById("menuButton");

// Add an event listener to expand the menu
menuButton.addEventListener("click", function () {
    navReveal.classList.toggle("showNavHideButton");
    menuButton.classList.toggle("showNavHideButton");
});
