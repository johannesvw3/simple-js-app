pokemonRepository = (function () {

let pokedexPokemonList = document.querySelector('.pokemon-list');
let pokedexScreen = document.querySelector('.pokedex-screen');
let modalContainer = document.querySelector('#modal-container');
let modal = document.querySelector('.modal');

let modalClose = document.createElement('button');
  modalClose.classList.add('modal-close');
let pokeName = document.createElement('h1');
 pokeName.classList.add('Pokename');
let pokeHeight = document.createElement('p');
 pokeHeight.classList.add('Pokeheight');
let imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');
let pokeImage = document.createElement('img');
  pokeImage.classList.add('PokeImage');
let pokeType = document.createElement('p');
  pokeType.classList.add('Poketype');

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
            pokemonButton.innerHTML = pokemon.name.toUpperCase();
        pokemonButton.classList.add('pokemon-button');
        pokedexPokemonList.appendChild(pokemonItem);
        pokemonItem.appendChild(pokemonButton);
        pokemonButton.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    function showModal() {
      modalContainer.classList.add('is-visible');
    }

//Hide Modal Event Listeners

    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }

    modalClose.addEventListener('click' , hideModal);

    window.addEventListener('keydown', (e) => {
      let modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
      }
    });
   
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

//Pokemon Details Modal

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
        pokeName.innerHTML = pokemon.name.toUpperCase();
        pokeHeight.innerHTML = 'Height: ' + pokemon.height;
        pokeType.innerHTML = 'Type: ' + pokemon.types.toUpperCase();
        pokeImage.src = pokemon.imageUrl;
        modalClose.innerHTML = "Close";
        showModal();
        });
    }

//Get list from pokeapi API
  
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
            item.types = details.types[0].type.name;
          }).catch(function (e) {
              console.error(e);
          });
     }

     modal.appendChild(modalClose);
     modal.appendChild(pokeName);
     modal.appendChild(pokeHeight);
     modal.appendChild(pokeType);
     modal.appendChild(imageContainer);
     imageContainer.appendChild(pokeImage);
     
//Functions

    return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDeatails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
    };

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon)
    });
});

