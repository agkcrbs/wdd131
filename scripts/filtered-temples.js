
// Link elements
const navReveal = document.querySelector("nav");
const menuButton = document.getElementById("menuButton");

// Add an event listener to expand the menu
// Wrap this in a condition so it doesn't do anything in larger view
function toggleFunction() {
  if (window.innerWidth <= 599) {
    navReveal.classList.toggle("showNavHideButton");
    menuButton.classList.toggle("showNavHideButton");
  }
}

menuButton.addEventListener("click", toggleFunction);

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26-27",
    area: 51921,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/200x320/hong_kong_china_temple_exterior1.jpeg" // "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28222.jpg"
  },
  {
    templeName: "Provo Utah Rock Canyon",
    location: "Provo, Utah, United States",
    dedicated: "1972, February, 9",
    area: 71998, // Unavailable; used Orem Temple's area instead
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-temple-lds-890642-wallpaper.jpg" // "https://churchofjesuschristtemples.org/assets/img/temples/provo-utah-rock-canyon-temple/provo-utah-rock-canyon-temple-62745.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul, South Korea",
    dedicated: "1985, December, 14-15",
    area: 28057,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg" // "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22298.jpg"
  },
];

// Hmm...
const container = document.querySelector("main section");

// Function to create and display temple cards
function displayTemples(templeArray) {
  container.innerHTML = ""; // Clear previous content
  templeArray.forEach(temple => {
    const card = document.createElement("div");
    card.className = "temple-card";

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area} sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    container.appendChild(card);
  });
}

// Initial display of all temples
displayTemples(temples);

// Event listeners for navigation buttons
document.getElementById("home").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent anchor navigation that causes page reload, because I'm using <a> instead of preferred <button>
  displayTemples(temples);
  toggleFunction();
});

document.getElementById("old").addEventListener("click", (event) => {
  event.preventDefault();
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0], 10);
    return year < 1900;
  });
  displayTemples(oldTemples);
  toggleFunction();
});

document.getElementById("new").addEventListener("click", (event) => {
  event.preventDefault();
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0], 10);
    return year > 2000;
  });
  displayTemples(newTemples);
  toggleFunction();
});

document.getElementById("large").addEventListener("click", (event) => {
  event.preventDefault();
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
  toggleFunction();
});

document.getElementById("small").addEventListener("click", (event) => {
  event.preventDefault();
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
  toggleFunction();
});

