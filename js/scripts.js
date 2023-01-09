let pokemonRepository = (function (pokemon) {
    
    let pokemonList = [
    {
        name: "Ampharos",
        height: 4.58,
        type: "electric",
    },

    {
        name: "Ho-oh",
        height: 12.5,
        type: ["fire","flying"],
    },

    {
        name: "Mewtwo",
        height : 6.58,
        type: "psychic",
    }
]

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
        console.log(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
    }
      
})()

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});