// Scrolling
const allItems = document.querySelectorAll(".bottom-news");
const seeMoreButton = document.getElementById("see-more"); // initial see more button

let initialScrollY = window.scrollY; // save initial scroll position
let currentIndex = 0;
const itemsPerLoad = 3; // number of items to load each time

// Create buttons
function createEvenMoreButton() {
    const newButton = document.createElement("button");
    newButton.id = "even-more";
    newButton.type = "button";
    newButton.textContent = "See even more ↓";
    newButton.addEventListener("click", clickEvenMore);
    return newButton;
}

function createGoBackButton() {
    const newButton = document.createElement("button");
    newButton.id = "go-back";
    newButton.type = "button";
    newButton.textContent = "Go back up ↑";
    newButton.addEventListener("click", clickGoBack);
    return newButton;
}

// Function to handle initial "see more" button click
seeMoreButton.addEventListener("click", () => {
    // Hide the initial button
    seeMoreButton.style.display = "none";

    // Save the initial scroll position
    initialScrollY = window.scrollY;

    // Reveal first 3 items
    revealItems(currentIndex, itemsPerLoad);
    currentIndex += itemsPerLoad;

    // Insert "even more" button after the last revealed item
    insertEvenMoreButton();

    // Scroll to the first revealed item
    if (currentIndex > 0) {
        allItems[currentIndex - itemsPerLoad].scrollIntoView({ behavior: "smooth" });
    }
});

// Function to reveal items from start to end index
function revealItems(start, count) {
    for (let i = start; i < start + count && i < allItems.length; i++) {
        allItems[i].classList.remove("hidden");
        allItems[i].classList.add("visible");
    }
}

// Function to insert "even more" button
function insertEvenMoreButton() {
    // Remove existing button container
    document.querySelectorAll(".button-container").forEach(container => container.remove());

    if (currentIndex < allItems.length) {
        const lastRevealed = allItems[currentIndex - 1];

        // Create container div
        const container = document.createElement("div");
        container.className = "button-container";

        // Create and append buttons
        const evenMoreButton = createEvenMoreButton();
        const goBackButton = createGoBackButton();

        container.appendChild(evenMoreButton);
        container.appendChild(goBackButton);

        // Insert after last revealed item
        lastRevealed.parentNode.insertBefore(container, lastRevealed.nextSibling);
    } else {
        // All items loaded; only add "go back"
        const container = document.createElement("div");
        container.className = "button-container";

        const goBackButton = createGoBackButton();
        container.appendChild(goBackButton);

        // Append container to the end of the parent container holding all news items
        const newsParent = allItems[0].parentNode;
        newsParent.appendChild(container);
    }
}

// Handle "even more" button click
function clickEvenMore() {
    // Remove this button
    this.remove();

    // Reveal next set of items
    revealItems(currentIndex, itemsPerLoad);
    currentIndex += itemsPerLoad;

    // Insert "even more" button or show "go back" if done
    insertEvenMoreButton();

    // Scroll to the first of newly revealed items
    if (currentIndex - itemsPerLoad < allItems.length) {
        allItems[currentIndex - itemsPerLoad].scrollIntoView({ behavior: "smooth" });
    }
}

function clickGoBack() {
    // Remove existing button containers
    document.querySelectorAll(".button-container").forEach(container => container.remove());

    // Hide all items first
    allItems.forEach(item => {
        item.classList.remove("visible");
        item.classList.add("hidden");
    });

    // Reset index
    currentIndex = 0;

    // Show initial "see more" button
    seeMoreButton.style.display = "block";

    // Scroll back to initial position
    window.scrollTo({ top: initialScrollY, behavior: "smooth" });
}
