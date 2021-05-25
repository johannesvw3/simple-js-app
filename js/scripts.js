let pokemonList = [
    {name: "Bulbasaur", height: 0.7, types: ["grass", "Poison"], evolutions: ["Ivysaur", "Venusaur"]},
    {name: "Charmander", height: 0.6, types: ["Fire", "Normal"], evolutions: ["Charmeleon", "Charizard"]},
    {name: "Squritle", height: 0.5, types: ["Water", "Ice"], evolutions: ["Wartortle", "Blastoise"]},
    {name: "Eevee", height: 0.3, types: ["Normal"], evolutions: ["Umbreon", "Sylveon", "Leafeon", "Glaceon", "Vaporeon", "Jolteon", "Flareon", "Espeon"]}
    ];

    pokemonList.forEach(function(pokemon) {
        if (pokemon.height <= 0.6) {
            document.write(pokemon.name + " (Height: " + pokemon.height + ")" + '<br>')
            }
    });

        pokemonList.forEach(function(pokemon) {
        if (pokemon.height > 0.6) {
            document.write(pokemon.name + " (Height: " + pokemon.height + ")" + " Wow, That's Big!")
            }
    });


