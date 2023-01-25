let pokemonRepository = (function () {
    
    //pokemon array
    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


    //Other Functions 

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

    //catch errors function
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

    /* ORIGINAL function that adds pokemon to pokemonList in button format
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
*/


    function addListItem(pokemon){
        let container = $('.pokemon-list')
        let listItem = $('<li class="list-group-item"></li>');
        let button = $('<button class="pokemon-button btn btn-info" data-target="#pokemon-modal" data-toggle="modal">' + pokemon.name + '</button>');

        listItem.append(button);
        container.append(listItem);

    // event listener to show pokemon details when clicked 
        button.on('click', function() {
            showDetails(pokemon);
        });   
    }


    // NEW showModal function for Bootstrap
    function showModal(pokemon){
        const ModalCntr = $('.modal');
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');

        //clear existing content of the modal
        modalBody.empty();
        modalTitle.empty();

        //create element for name in modal content
        let nameElement = $('<h1>' + pokemon.name + '</h1>');

        //create element for image in modal content
        let imgElement = $('<img class="modal-image">');
        imgElement.attr("src", pokemon.imageUrl);

        //create element for height in modal content
        let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');       

        //create element for height in modal content
        let typeElement = $('<p>' + 'Type: ' + pokemon.types + '</p>');

        ModalCntr.addClass('show');
        modalTitle.append(nameElement);
        modalBody.append(imgElement);
        modalBody.append(heightElement);
        modalBody.append(typeElement);
    }

    /* OLD function to create modal
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
                if (target === modal-dialog) {
                 hideModal();
              }
            });
        }


    //this shows the modal on click
    document.querySelector('.pokemon-list').addEventListener('click', () => {
        showModal();
    });


    */

    //function to show modal with pokemon name, details, img
    function showDetails(pokemon){
        loadDetails(pokemon).then(function() {
            showModal(pokemon);
            });
    }


    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
    };
      
})();

pokemonRepository.loadList().then(function() {
    //now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

/* OLD - shouldn't need since Bootstrap has this functionality
function hideModal() {
    let modalContainer = document.querySelector('#modal-dialog');
    modalContainer.classList.remove('is-visible');
  }

window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-dialog');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
});
*/

//$('#pokemonModal').modal(data-show);