let pokemonRepository = (function () {
    
    //pokemon array
    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //other functions 

    //function to GET list from API
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

    //function to GET and details from API
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;


        }).catch(function (e) {
            console.error(e);
        });
      }

    //function to return all items in pokemonList
    function getAll (){
        return pokemonList;
    }

    //function to add new pokemon to pokemonList array via push
    function add (pokemon) {
        pokemonList.push(pokemon);
    }

    //function that adds pokemon to pokemonList in button format
    function addListItem(pokemon){
        let container = document.querySelector('.pokemon-list');
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("group-list-item");
        container.appendChild(button);
        button.addEventListener('click', function() {
            showDetails(pokemon);
        }); 
    }

    //function to create modal
    function showModal(title, text, image) {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.add('is-visible');

        //clear all existing modal content
        modalContainer.innerHTML = ' ';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        //add new modal content

        //close button
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        //title
        let titleElement = document.createElement('h1');
        titleElement.innerText = title;
        //text
        let contentElement = document.createElement('p');
        contentElement.innerText = text;
        //image
        let imageElement = document.createElement('img');
        imageElement.src = image;
        imageElement.classList.add("pokemon-image");

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imageElement);
        modalContainer.appendChild(modal);

        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
              hideModal();
            }
        });
    }

    //this shows the modal on click
    document.querySelector('#show-modal').addEventListener('click', () => {
        showModal();
    });


    //function to show modal with pokemon name, details, img
    function showDetails(pokemon){
        loadDetails(pokemon).then(function() {
            showModal(pokemon.name, "Height: " + pokemon.height, pokemon.imageUrl);
            }
        )};


    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
    }
      
})();

pokemonRepository.loadList().then(function() {
    //now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
});
});

function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
});