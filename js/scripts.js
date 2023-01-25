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

    //function to GET and details from API (will call this on pokemon-button click)
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.weight = details.weight;

            let typeArray = [];
            details.types.forEach(function (item) {
              typeArray.push(item.type.name);
            });
            // Defining separator between printed array items
            item.types = typeArray.join(', ');
          
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
        let weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');

        //create element for height in modal content
        let typeElement = $('<p>' + 'Type: ' + pokemon.types + '</p>');

        ModalCntr.addClass('show');
        modalTitle.append(nameElement);
        modalBody.append(imgElement);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typeElement);
    }

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

$(function () {
    $('.close').on('click', function () {
        modalCntr.hide();
    })
})