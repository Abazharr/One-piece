// home.js

// FAQ data array to hold question-answer pairs
const faqData = [
    {
        question: "What is the goal of One Piece?",
        answer: "The main goal is for Luffy and his crew to find the legendary treasure known as the 'One Piece' and make Luffy the Pirate King."
    },
    {
        question: "Who is Eiichiro Oda?",
        answer: "Eiichiro Oda is the creator and artist behind *One Piece*, known for his unique art style and engaging storytelling."
    },
    {
        question: "Where can I watch One Piece?",
        answer: "*One Piece* is available on streaming platforms such as Crunchyroll, Funimation, and Netflix."
    }
];

// Function to create FAQ section
function createFAQSection() {
    const faqContainer = document.querySelector(".accordion");

    faqData.forEach(item => {
        // Create each FAQ item container
        const faqItem = document.createElement("div");
        faqItem.classList.add("accordion-item");

        // Create the title (question)
        const title = document.createElement("h3");
        title.classList.add("accordion-title");
        title.textContent = item.question;

        // Create the content (answer)
        const content = document.createElement("div");
        content.classList.add("accordion-content");
        content.textContent = item.answer;
        content.style.display = "none"; // Hide content by default

        // Toggle function for accordion behavior
        title.addEventListener("click", () => {
            const isVisible = content.style.display === "block";
            content.style.display = isVisible ? "none" : "block";
        });

        // Append title and content to the item
        faqItem.appendChild(title);
        faqItem.appendChild(content);

        // Add the FAQ item to the container
        faqContainer.appendChild(faqItem);
    });
}

// Function to set up the video section
function setupVideo() {
    const videoContainer = document.querySelector(".video-container");
    const iframe = document.createElement("iframe");

    iframe.src = "https://www.youtube.com/embed/videoseries?list=PLJrvLNDbcTd7D_13-zTVt1XZ9pqdqOHAP&autoplay=1&mute=1";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay";
    iframe.allowFullscreen = true;

    // Append the iframe to the video container
    videoContainer.appendChild(iframe);
}

// Initialize page elements
window.onload = function() {
    createFAQSection();
    setupVideo();
};
