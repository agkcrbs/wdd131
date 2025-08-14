
window.addEventListener("DOMContentLoaded", () => {
    const countSpan = document.getElementById("count");
    const count = localStorage.getItem("count") || 0;
    countSpan.textContent = count;
});
  