// Navigation hovering
// Get references to all headers
let h3_1 = document.getElementById("h3-1");
let h3_2 = document.getElementById("h3-2");
let h3_3 = document.getElementById("h3-3");

let listenersAttached = false;

function attachListeners() {
    if (listenersAttached) return; // Avoid duplicate attachments

    // Remove any existing listeners first, crucial for re-attaching
    h3_1.removeEventListener("mouseenter", highlight);
    h3_1.removeEventListener("mouseleave", unhighlight);
    h3_2.removeEventListener("mouseenter", highlight);
    h3_2.removeEventListener("mouseleave", unhighlight);
    h3_3.removeEventListener("mouseenter", highlight);
    h3_3.removeEventListener("mouseleave", unhighlight);

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
            h3_2.style.backgroundColor = "";
            h3_3.style.backgroundColor = "";
        } else if (number === "2") {
            h3_1.style.backgroundColor = "";
            h3_3.style.backgroundColor = "";
        } else {
            h3_1.style.backgroundColor = "";
            h3_2.style.backgroundColor = "";
        }
    }

    h3_1.addEventListener("mouseenter", () => highlight("1"));
    h3_1.addEventListener("mouseleave", () => unhighlight("1"));
    h3_2.addEventListener("mouseenter", () => highlight("2"));
    h3_2.addEventListener("mouseleave", () => unhighlight("2"));
    h3_3.addEventListener("mouseenter", () => highlight("3"));
    h3_3.addEventListener("mouseleave", () => unhighlight("3"));

    h3_1.addEventListener("mouseenter", () => {
        h3_2.style.backgroundColor = "purple";
        h3_3.style.backgroundColor = "purple";
    });
    h3_1.addEventListener("mouseleave", () => {
        h3_2.style.backgroundColor = "";
        h3_3.style.backgroundColor = "";
    });
    h3_2.addEventListener("mouseenter", () => {
        h3_1.style.backgroundColor = "purple";
        h3_3.style.backgroundColor = "purple";
    });
    h3_2.addEventListener("mouseleave", () => {
        h3_1.style.backgroundColor = "";
        h3_3.style.backgroundColor = "";
    });
    h3_3.addEventListener("mouseenter", () => {
        h3_1.style.backgroundColor = "purple";
        h3_2.style.backgroundColor = "purple";
    });
    h3_3.addEventListener("mouseleave", () => {
        h3_1.style.backgroundColor = "";
        h3_2.style.backgroundColor = "";
    });

    listenersAttached = true;
}

function removeListeners() {
    if (!listenersAttached) return;

    h3_1.replaceWith(h3_1.cloneNode(true));
    h3_2.replaceWith(h3_2.cloneNode(true));
    h3_3.replaceWith(h3_3.cloneNode(true));

    // Reassign references after cloning
    h3_1 = document.getElementById("h3-1");
    h3_2 = document.getElementById("h3-2");
    h3_3 = document.getElementById("h3-3");

    listenersAttached = false;
}

function checkSize() {
    if (window.innerWidth >= 600) {
    attachListeners();
    } else {
    removeListeners();
    }
}

window.addEventListener("resize", checkSize);

// Run on initial load
checkSize();

// Attach listeners on initial load
attachListeners();
