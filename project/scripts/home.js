
//
// JavaScript to add random values
//

const elements = document.querySelectorAll("#card-top2");

elements.forEach(element => {
    element.addEventListener("mouseenter", () => {
        const randomX = Math.floor(Math.random() * 10) - 5; // -5 to 5 pixels
        const randomY = Math.floor(Math.random() * 10) - 5;

        element.style.setProperty("--random-x", `${randomX}px`);
        element.style.setProperty("--random-y", `${randomY}px`);
    });

    element.addEventListener("mouseleave", () => {
        element.style.removeProperty("--random-x");
        element.style.removeProperty("--random-y");
    });
});

//
// Clicking
//

document.getElementById("card-top1").addEventListener("click", function () {
    window.location.href = "children.html";
});

document.getElementById("card-top2").addEventListener("click", function () {
    window.location.href = "parents.html";
});

document.getElementById("card-bottom").addEventListener("click", function () {
    window.location.href = "contact.html";
});
