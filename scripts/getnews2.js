// Funtion to request the news page and load the content
async function requestNewsPage(URLString, newsNumber) {
    try {
        // Fetch the page content
        const response = await fetch(URLString);
        if (!response.ok) {
            throw new Error("Problem loading");
        }

        // Make the response into text
        const htmlData = await response.text();

        // Get the news data and insert it into the HTML
        handleNews(htmlData, newsNumber);
    } catch (error) {
        console.error("Something went wrong:", error);
    }
}

// Function to extract the news and load it into the HTML
function handleNews(HTML, numberOfStories) {
    // Create a DOM element
    const parser = new DOMParser();
    const doc = parser.parseFromString(HTML, "text/html");

    // Get all the <li> elements
    const stories = doc.querySelectorAll("article");

    // Make sure there are some stories
    if (stories.length !== 0) {

        // Get the desired number of stories
        const newsStories = Array.from(stories).slice(0, numberOfStories);

        // Loop through the stories and get their data
        newsStories.forEach((story, index) => {
            // Extract the thumbnail image URL
            const imageURL = story.querySelector("div.entry-thumb a img")?.src;

            // Extract the article link
            const link = story.querySelector("h2.entry-title a")?.href;

            // Extract the title text
            const title = story.querySelector("h2.entry-title a")?.textContent?.trim();

            // Extract the excerpt paragraph
            const excerpt = story.querySelector("p.post-excerpt")?.textContent?.trim();

            // Get the HTML elements to hold the news stories
            const cardSection = document.querySelectorAll(".news-card")[index];
            const spanElement = cardSection.querySelector("span");

            // Assemble the HTML to insert
            const newsStoryHTML = `
                <a href="${link}" target="_blank">
                    <img src="${imageURL}" alt=${title}" class="news-image">
                    <h3 class="news-title">${title}</h3>
                </a>
                <p class="news-excerpt">${excerpt}</p>
            `

            // Insert the HTML into the HTML elements
            if (spanElement) {
                spanElement.innerHTML = newsStoryHTML;
            }
        });

    } else {
        console.log("No stories found");
    }
}

// URL to fetch news stories
// const newsURL = "http://koreabizwire.com/index.php?s=North+Jeolla+health+healthcare";
const newsURL = "http://koreabizwire.com/category/lifestyle/health-wellness";

// // Try to work around CORS blocking
URLVariable = "https://corsproxy.io/?url=" + newsURL;

// Load the news page
requestNewsPage(URLVariable, 2);
// requestNewsPage(newsURL, 2);
