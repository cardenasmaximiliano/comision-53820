// Función para obtener todos los personajes
async function getAllCharacters() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      return data.results.slice(0,5);
    } catch (error) {
      console.error('Error fetching character data:', error);
      return [];
    }
  }
  
  // Función para mostrar la lista de personajes en el DOM
  async function displayAllCharacters() {
    const characters = await getAllCharacters();
    const charactersElement = document.getElementById('characters');
    
    characters.forEach(character => {
      const characterDiv = document.createElement('div');
      characterDiv.classList.add('character');
      characterDiv.innerHTML = `
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="${character.name}">
        <p><strong>Especie:</strong> ${character.species}</p>
        <p><strong>Origen:</strong> ${character.origin.name}</p>
        <p><strong>Ubicación:</strong> ${character.location.name}</p>
      `;
      charactersElement.appendChild(characterDiv);
    });
  }
  
  // Llamada a la función para mostrar todos los personajes
  displayAllCharacters();