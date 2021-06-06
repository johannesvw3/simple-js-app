pokemonRepository = (function () {

let pokedexPokemonList = document.querySelector('.pokemon-list')

let pokemonList = [
    {name: "Bulbasaur", height: 0.7, types: ["grass", "Poison"], evolutions: ["Ivysaur", "Venusaur"]},
    {name: "Charmander", height: 0.6, types: ["Fire", "Normal"], evolutions: ["Charmeleon", "Charizard"]},
    {name: "Squirtle", height: 0.5, types: ["Water", "Ice"], evolutions: ["Wartortle", "Blastoise"]},
    {name: "Eevee", height: 0.3, types: ["Normal"], evolutions: ["Umbreon", "Sylveon", "Leafeon", "Glaceon", "Vaporeon", "Jolteon", "Flareon", "Espeon"]}
    ];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        typeof pokemon == 'object' ? pokemonList.push(pokemon) : console.log('wrong format')
    }

    function addListItem(pokemon){
        let pokemonItem = document.createElement('li');
        let pokemonButton = document.createElement('button');
            pokemonButton.innerHTML = pokemon.name;
        pokemonButton.classList.add('pokemon-button');
        pokedexPokemonList.appendChild(pokemonItem);
        pokemonItem.appendChild(pokemonButton);
        pokemonButton.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon)
    }

    return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
    };

})();

pokemonRepository.add({ name: "Pikachu", height: 0.4 });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)
});

/*
pokemon.height > 0.6 ?  document.write(pokemon.name + " (Height: " + pokemon.height + ")" + " Wow, That's Big!" + '<br>') 
    : document.write(pokemon.name + " (Height: " + pokemon.height + ")" + '<br>');
    */