// Karakterdata
const characters = [
    { name: "Monkey D. Luffy", image: "img/luffy.png", description: "Leder av Straw Hat Pirates." },
    { name: "Roronoa Zoro", image: "img/zoro.png", description: "Sverdsliper med en drøm om å bli den beste." },
    { name: "Nami", image: "img/nami.png", description: "Navigatør med kjærlighet for kart." },
    { name: "Usopp", image: "img/usopp.png", description: "Sniper med stor fantasi." },
    { name: "Sanji", image: "img/sanji.png", description: "Kokk med drømmer om All Blue." },
    { name: "Tony Tony Chopper", image: "img/chopper.png", description: "Legedoktor, en reinsdyr." },
    { name: "Nico Robin", image: "img/robin.png", description: "Arkeolog som søker sannheten." },
    { name: "Franky", image: "img/franky.png", description: "Cyborg som elsker maskiner." }
];

// Funksjon for å generere karakterkort
function generateCharacterCards() {
    const container = document.getElementById('character-container');

    characters.forEach(character => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 mb-4';

        colDiv.innerHTML = `
            <div class="card">
                <img src="${character.image}" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">${character.description}</p>
                </div>
            </div>
        `;

        container.appendChild(colDiv);
    });
}

// Generer kortene
generateCharacterCards();
