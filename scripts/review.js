
const count = localStorage.getItem('reviewCount');
const newCount = count ? parseInt(count) + 1 : 1;
localStorage.setItem('reviewCount', newCount);
document.getElementById('reviewCount').textContent = newCount;
