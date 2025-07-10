// Function to extract the news and load it into the HTML
function handleNews() {
    // Set default values
    const exImage1 = "images/news-img1.jpg";
    const exTitle1 = "Study Finds Weekly Walking Boosts Quality of Life for Elderly, Especially Those With Obesity";
    const exLink1 = "http://koreabizwire.com/study-finds-weekly-walking-boosts-quality-of-life-for-elderly-especially-those-with-obesity/324608";
    const exExcerpt1 = "SEOUL, July 4 (Korea Bizwire) — A new study has found that elderly individuals who walk for at least two and a half hours per week experience significantly higher quality of life, with the benefits even more pronounced among those who are obese. The research, led by Professors Kim Jeong-ha and Lee Hye-jun of Chung-Ang [...]";

    const exImage2 = "images/news-img2.jpg";
    const exTitle2 = "North Korea’s Cosmetic Surgery Law Revealed, Allowing Aesthetic Procedures but With Strict Limits";
    const exLink2 = "http://koreabizwire.com/north-koreas-cosmetic-surgery-law-revealed-allowing-aesthetic-procedures-but-with-strict-limits/324610";
    const exExcerpt2 = "SEOUL, July 4 (Korea Bizwire) — North Korea has formally legalized cosmetic surgery for aesthetic purposes under a little-known law dating back to 2016, newly revealed documents show. While the law permits a broad range of procedures to enhance physical appearance, it also imposes strict restrictions on surgeries deemed to pose security or ideological risks. According [...]";

    // Get the HTML elements to hold the news stories
    const newsDiv1 = document.getElementById("news-container1");
    const newsDiv2 = document.getElementById("news-container2");

    // Assemble the HTML to insert
    const newsStoryHTML1 = `
    <img src="${exImage1}" alt="${exTitle1}" class="news-image">
    <a href="${exLink1}" target="_blank" class="news-title-link">
        <h3 class="news-title">${exTitle1}</h3>
    </a>
    <p class="news-excerpt">${exExcerpt1}</p>
    `;

    const newsStoryHTML2 = `
    <img src="${exImage2}" alt="${exTitle2}" class="news-image">
    <a href="${exLink2}" target="_blank" class="news-title-link">
        <h3 class="news-title">${exTitle2}</h3>
    </a>
    <p class="news-excerpt">${exExcerpt2}</p>
    `;

    // Insert the HTML into the HTML elements
    if (newsDiv1) {
        newsDiv1.innerHTML = newsStoryHTML1;
    }
    if (newsDiv2) {
        newsDiv2.innerHTML = newsStoryHTML2;
    }
};

// Run the dummy insertion function
handleNews();
