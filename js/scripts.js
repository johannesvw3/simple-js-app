let pokemonList = [
    {name: "Bulbasaur", height: 0.7, types: ["grass", "Poison"], evolutions: ["Ivysaur", "Venusaur"]},
    {name: "Charmander", height: 0.6, types: ["Fire", "Normal"], evolutions: ["Charmeleon", "Charizard"]},
    {name: "Squritle", height: 0.5, types: ["Water", "Ice"], evolutions: ["Wartortle", "Blastoise"]},
    {name: "Eevee", height: 0.3, types: ["Normal"], evolutions: ["Umbreon", "Sylveon", "Leafeon", "Glaceon", "Vaporeon", "Jolteon", "Flareon", "Espeon"]}
    ];

    for (let i = 0; i < pokemonList.length; i++) {
        if (pokemonList[i].height <= 0.6) {
            document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + " ")
            }

        if (pokemonList[i].height > 0.6) {
            document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + " Wow, that's big! ")
            }
        }; 


