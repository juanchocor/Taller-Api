function buscarPokemon() {
    const pokemon = document.getElementById('pokemon').value.toLowerCase();
    const pokemonCarta = document.getElementById('pokemonCarta');

    // Verificar si se ha ingresado el nombre o ID del Pokémon
    if (pokemon.trim() === '') {
        alert('Ingresa el nombre o el id del  pokemon: ');
        return;
    }

    // Realizar la solicitud a la PokeAPI
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(response => response.json())
        .then(datos => {
            // Mostrar la información del Pokémon en una tarjeta
            const pokemonNombre = datos.name;
            const pokemonImagen = datos.sprites.front_default;
            const habilidades = datos.abilities.map(ability => ability.ability.name).join(', ');

            const pokemonHTML = `
                <h2>${pokemonNombre}</h2>
                <img src="${pokemonImagen}" alt="${pokemonNombre}">
                <p>habilidades: ${habilidades}</p>
            `;

            pokemonCarta.innerHTML = pokemonHTML;
        })
        .catch(error => {
            console.error('Error fetching Pokémon data:', error);
            alert('An error occurred while fetching Pokémon data. Please try again.');
        });
}
