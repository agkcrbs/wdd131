
// Event handler practice

// Tether the DOM's button element to a variable
const buttonElement = document.querySelector("button");

// Return a random number between 0 and the number passed in.
// The "number + 1" part is to include the number itself in the range.
// Math.random() returns a number between 0 (inclusive) and 1 (exclusive) (e.g., 0.999999...),
// so multiplying by 5 gives a range of 0 to 5 (exclusive; e.g., 4.999999),
// and adding 1 includes 5 in the range, essentially expanding the range by 1.
// Math.floor() is used to fall down to the nearest whole number;
// for example, Math.floor(4.9) will return 4.
// This "+ 1" only matters because the RGB colour values go from 0 to 255,
// so we just want to include all possible numbers for consistency's sake.
function random(number) {
  return Math.floor(Math.random() * (number + 1));
};

// // ---
// // "Arrow function" anonymous function invoked by event
// buttonElement.addEventListener("click", () => {
//   const randomColour = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = randomColour;
// });

// // ---
// // Named function invoked by event
// function changeBackgroundColour() {
//     const randomColour = `rgb(${random(155)} ${random(155)} ${random(155)})`;
//     document.body.style.backgroundColor = randomColour;
// };
// buttonElement.addEventListener("mouseover", changeBackgroundColour);
// buttonElement.addEventListener("mouseout", changeBackgroundColour);

// // ---
// // Anonymous function invoked by event handler property
// buttonElement.onmouseover = function () {
//     const randomColour = `rgb(${random(55)} ${random(55)} ${random(55)})`;
//     document.body.style.backgroundColor = randomColour;
// };

// // ---
// // Named function invoked by event handler property
// function changeBackgroundColour() {
//     const randomColour = `rgb(${255} ${255} ${255-random(35)})`;
//     document.body.style.backgroundColor = randomColour;
// }
// buttonElement.onmouseover = changeBackgroundColour;
// buttonElement.onmouseout = changeBackgroundColour;

// // ---
// Event bubbling (or propagation/delegation)
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("#secondButton");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
// The click on the button fires first,
// followed by the click on its parent (the <div> element),
// followed by the click on the <div> element's parent (the <body> element).
// We describe this by saying that the event bubbles up from the innermost element that was clicked.
// While useful, this can cause unexpected behaviour, especially when the event handlers conflict.
// The stopPropagation() method interrupts bubbling.
// The opposite of bubbling is "capturing" (or "trickling down"); this is disabled by default.

