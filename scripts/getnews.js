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
async function handleNews(HTML, numberOfStories) {
    // Create a DOM element
    const parser = new DOMParser();
    const doc = parser.parseFromString(HTML, "text/html");

    // Get all the <li> elements
    const stories = doc.querySelectorAll("article");

    // Make sure there are some stories
    if (stories.length === 0) {
        console.log("No stories found");
        return;
    }

    // Get the desired number of stories
    const newsStories = Array.from(stories).slice(0, numberOfStories);

    // Loop through the stories and get their data
    for (let index = 0; index < newsStories.length; index++) {
        const story = newsStories[index];

        // Extract the article link
        const link = story.querySelector("h2.entry-title a")?.href;

        // Extract the title text
        const title = story.querySelector("h2.entry-title a")?.textContent?.trim();

        // Extract the excerpt paragraph
        const excerpt = story.querySelector("p.post-excerpt")?.textContent?.trim();

        // Use the title or other info to query for an image
        const query = title || "default query";

        // Fetch thumbnail asynchronously
        const thumbnailUrl = await fetchThumbnailAsync(query);
        // Construct the HTML with the thumbnail or fallback image
        const imageSrc = thumbnailUrl || story.querySelector("div.entry-thumb a img")?.src || "default-image.jpg";

        // Get the HTML elements to hold the news stories
        const newsDiv = document.querySelectorAll(".news-container")[index];

        // Assemble the HTML to insert
        const newsStoryHTML = `
        <img src="${imageSrc}" alt="${title}" class="news-image">
        <a href="${link}" target="_blank" class="news-title-link">
            <h3 class="news-title">${title}</h3>
        </a>
        <p class="news-excerpt">${excerpt}</p>
        `;

        // Insert the HTML into the HTML elements
        if (newsDiv) {
            newsDiv.innerHTML = newsStoryHTML;
        }
    };

    // Try to reflect the image orientation...
    document.querySelectorAll(".news-image").forEach(img => {
        img.addEventListener("load", () => {
            const isLandscape = img.naturalWidth > img.naturalHeight;

            if (isLandscape) {
                img.classList.add("landscape-image");
            } else {
                img.classList.add("portrait-image");
            }
        });
    });
}

// Function to fetch thumbnail image via SerpAPI's REST API
async function fetchThumbnailAsync(query) {
    const apiKey = "2ec758062c34f84fcb15578efcfef769a213d61eeb5afb7323a03632b7e06ea8";
    const url = `https://serpapi.com/search?engine=google&q=${encodeURIComponent(query)}&api_key=${apiKey}&tbm=isch`;
    thumbnailFetch = CORSAddress + url;

    try {
        const response = await fetch(thumbnailFetch);
        if (!response.ok) throw new Error("request failed");

        const json = await response.json();

        if (json && json.images_results && json.images_results.length > 0) {
            console.log("There was a result.");
            console.log(json.images_results[0].thumbnail);
            return json.images_results[0].thumbnail;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Thumbnail fetch error:", error);
        return null;
    }
}

// URL to fetch news stories
// const newsURL = "http://koreabizwire.com/index.php?s=North+Jeolla+health+healthcare";
const newsURL = "http://koreabizwire.com/category/lifestyle/health-wellness";

// Work around CORS blocking
const CORSAddress = "https://corsproxy.io/?url=";
const URLVariable = CORSAddress + newsURL;

// Load the news page
requestNewsPage(URLVariable, 2);
// requestNewsPage(newsURL, 2);
