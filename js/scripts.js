pokemonRepository = (function () {

let pokedexPokemonList = document.querySelector('.pokemon-list');
let pokedexScreen = document.querySelector('.pokedex-screen');

let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        typeof pokemon == 'object' && "name" in pokemon ? pokemonList.push(pokemon) : console.log('wrong format')
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
        loadDetails(pokemon).then(function () {
        console.log(pokemon)
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

      function loadDetails(item) {
          let url = item.detailsUrl;
          return fetch(url).then(function (response) {
            return response.json();
          }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
          }).catch(function (e) {
              console.error(e);
          });
     }

    return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDeatails: loadDetails
    };

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon)
    });
});

