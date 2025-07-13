const radiusOutput = document.getElementById("radius");
const areaOutput = document.querySelector("#area"); /* problematic reference here... */ /* leads to "cannot set properties of null" error */

let area = 0;
const PI = 3.14159; /* not an assignment operator... */

let radius = 10; /* these redeclarations and re-assigments shouldn't work... */
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.innerHTML = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.innerHTML = radius;
areaOutput.textContent = area;
