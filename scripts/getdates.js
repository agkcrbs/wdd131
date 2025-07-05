const today = new Date();
const currentyear = document.getElementById("currentyear");
currentyear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.append(document.lastModified);