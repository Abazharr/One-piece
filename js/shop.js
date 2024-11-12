// shop.js

// Initial stock data and details for each manga volume
const mangaData = [
    { id: "volume1", title: "One Piece Volume 1", price: 9.99, stock: 10, imgSrc: "img/volume1.jpg" },
    { id: "volume2", title: "One Piece Volume 2", price: 9.99, stock: 8, imgSrc: "img/volume2.jpg" },
    { id: "volume3", title: "One Piece Volume 3", price: 9.99, stock: 5, imgSrc: "img/volume3.jpg" },
    { id: "volume4", title: "One Piece Volume 4", price: 9.99, stock: 12, imgSrc: "img/volume4.jpg" },
    { id: "volume5", title: "One Piece Volume 5", price: 9.99, stock: 7, imgSrc: "img/volume5.jpg" },
    { id: "volume6", title: "One Piece Volume 6", price: 9.99, stock: 15, imgSrc: "img/volume6.jpg" }
];

// Function to dynamically create manga items
function createMangaItems() {
    const shopContainer = document.getElementById("shop-container");

    mangaData.forEach(manga => {
        // Create the manga item container
        const mangaItem = document.createElement("div");
        mangaItem.classList.add("manga-item");
        mangaItem.id = manga.id;

        // Create inner HTML for each manga item
        mangaItem.innerHTML = `
            <img src="${manga.imgSrc}" alt="${manga.title}" class="manga-img">
            <h2>${manga.title}</h2>
            <p>Price: $${manga.price.toFixed(2)}</p>
            <p id="stock-${manga.id}">Available: ${manga.stock} copies</p>
            <button onclick="buyManga('${manga.id}')">Buy</button>
        `;

        // Append the manga item to the shop container
        shopContainer.appendChild(mangaItem);
    });
}

// Function to handle manga purchase
function buyManga(volumeId) {
    const manga = mangaData.find(m => m.id === volumeId);
    if (manga && manga.stock > 0) {
        manga.stock--; // Decrease stock count
        document.getElementById(`stock-${volumeId}`).textContent = `Available: ${manga.stock} copies`;
        alert(`You have purchased ${manga.title}!`);
    } else {
        alert(`Sorry, ${manga ? manga.title : "this item"} is out of stock!`);
    }
}

// Initialize the manga items on page load
window.onload = createMangaItems;
