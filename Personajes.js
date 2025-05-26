let allCharacters = [];

function Character(id, name, ki, maxKi, race, gender, image, affiliation, description) {
    
    this.id = id;
    this.name = name;
    this.image = image;
    

}

function renderCharacter(character) {
    const card = document.createElement('div');
    card.className = 'character-card';

    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <div class="character-info">
            
            <div class="namech">
            <h2>${character.name}</h2>
            </div>

            <div class="detail">
            <a href="GOKU.html?id=${character.id}" class="detail-link">Ver Detalles</a>
            </div>
            
        </div>
        `;

        

            return card;
        }     

function displayCharacters(filteredCharacters) {
    const container = document.getElementById('characters-container');
    container.innerHTML = '';
    filteredCharacters.forEach(character => {
        const card = renderCharacter(character);
        container.appendChild(card);
    });
}

function fetchAndDisplayCharacters() {
    const indices = [1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

    const fetches = indices.map(index =>
        fetch(`https://dragonball-api.com/api/characters/${index}`)
            .then(response => response.json())
            .then(data => {
                const character = new Character(data.id, data.name, data.ki,
                    data.maxKi, data.race, data.gender, data.image, data.affiliation,
                    data.description
                );
                allCharacters.push(character);
            })
    );

    Promise.all(fetches).then(() => {
        displayCharacters(allCharacters);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayCharacters();

    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filtered = allCharacters.filter(character =>
            character.name.toLowerCase().includes(query)
        );
        displayCharacters(filtered);
    });
});
        



