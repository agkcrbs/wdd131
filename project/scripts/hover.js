// Navigation hovering
// Get references to all headers
let h3_1 = document.getElementById("h3-1");
let h3_2 = document.getElementById("h3-2");
let h3_3 = document.getElementById("h3-3");

let listenersAttached = false;

function highlight(number) {
    if (number === "1") {
        h3_2.style.backgroundColor = "purple";
        h3_3.style.backgroundColor = "purple";
    } else if (number === "2") {
        h3_1.style.backgroundColor = "purple";
        h3_3.style.backgroundColor = "purple";
    } else {
        h3_1.style.backgroundColor = "purple";
        h3_2.style.backgroundColor = "purple";
    }
}

function unhighlight(number) {
    if (number === "1") {
        h3_2.style.backgroundColor = "#292929";
        h3_3.style.backgroundColor = "#292929";
    } else if (number === "2") {
        h3_1.style.backgroundColor = "#292929";
        h3_3.style.backgroundColor = "#292929";
    } else {
        h3_1.style.backgroundColor = "#292929";
        h3_2.style.backgroundColor = "#292929";
    }
}

function attachListeners() {
    if (listenersAttached) return;

    h3_1.addEventListener("mouseenter", () => highlight("1"));
    h3_1.addEventListener("mouseleave", () => unhighlight("1"));
    h3_2.addEventListener("mouseenter", () => highlight("2"));
    h3_2.addEventListener("mouseleave", () => unhighlight("2"));
    h3_3.addEventListener("mouseenter", () => highlight("3"));
    h3_3.addEventListener("mouseleave", () => unhighlight("3"));

    listenersAttached = true;
}

function removeListeners() {
    if (!listenersAttached) return;

    // Clear JS-applied styles
    [h3_1, h3_2, h3_3].forEach(el => {
        el.style.backgroundColor = ""; // removes inline styles
        const clone = el.cloneNode(true);
        el.replaceWith(clone);
    });

    // Reassign references after cloning
    h3_1 = document.getElementById("h3-1");
    h3_2 = document.getElementById("h3-2");
    h3_3 = document.getElementById("h3-3");

    listenersAttached = false;
}

function checkSize() {
    if (window.innerWidth >= 768) {
        attachListeners();
    } else {
        removeListeners(); // ensures hover styles revert to CSS
    }
}

window.addEventListener("resize", checkSize);
window.addEventListener("load", checkSize);
