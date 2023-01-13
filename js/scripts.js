let pokemonRepository = (function () {
    
    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //other functions 
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
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
      }

    function getAll (){
        return pokemonList;
    }

    function add (pokemon) {
        pokemonList.push(pokemon);
    }

    function remove (pokemon) {
        pokemonList.push(pokemon);
    }

    function addListItem(pokemon){
        let container = document.querySelector('.pokemon-list');
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        container.appendChild(button);
        button.addEventListener('click', function() {
            showDetails(pokemon);
        }); 
    }

    function showDetails(pokemon){
        loadDetails(pokemon).then(function() {
            console.log(pokemon);
        });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    }
      
})();

pokemonRepository.loadList().then(function() {
    //now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
});
});


function showModal(title, text) {
    let modalContainer = document.querySelector('#modal-container');
  
    // Clear all existing modal content
    modalContainer.innerHTML = '';
  
    let modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
  
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
  
    let contentElement = document.createElement('p');
    contentElement.innerText = text;
  
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
}
  
document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title','Modal Content');
});