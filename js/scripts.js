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
        let container = document.querySelector(pokemon);
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        container.appendChild(button); 
    }


    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
    }
      
})()

pokemonRepository.getAll().forEach(function (pokemon){
    if(pokemon.height <= 10){
        document.write("<p> Name: " + pokemon.name + "</p> Height: " + pokemon.height + "</p>" + "<p> Type: " + pokemon.type + "</p>" + "<br>");
    } else {
        document.write("<p> Name: " + pokemon.name + "</p>" + "<p> Height: " + pokemon.height +  "- Woah, that's HUGE! </p>" + "<p> Type: " + pokemon.type + "</p>" +"<br>")
    }
    
    let container = document.querySelector(".pokemon-list");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    container.appendChild(button);
});