
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();
    const contactData = {name, email, message, timestamp: new Date().toISOString() };
    localStorage.setItem("contactFormData", JSON.stringify(contactData));
    // Increment counter
    let count = localStorage.getItem("count");
    count = count ? parseInt(count) + 1 : 1;
    console.log(count);
    localStorage.setItem("count", count);
    // Redirect to receipt.html
    window.location.href = "receipt.html";
});
