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

    return {
        getAll: getAll,
        add: add,
    }
      
})()

/*print pokemon names + heights

for (let i=0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name + pokemonList[i].height + "<br>")
}

+/

// for loop for length of array */
// set condition for specific key-value of objects in array */
// <br> tag to display each object on a new line */

    //for (let i=0; i < pokemonList.length; i++){
        //if(pokemonList[i].height <= 10){
            //document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + "<br>");
        //} else {
            //document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Woah, that's HUGE!" + "<br>")
        //}
    //}


//function to print array items and details
//function printArrayDetails(){
    //for (let i = 0; i < pokemonList.length; i++){
        //document.write("<p>" + pokemonList[i].name + "</p>" + "<p> Height: " + pokemonList[i].height + "</p>" + "<p> Type: " + pokemonList[i].type + "</p>" + "<br>");
    //}
//}

pokemonRepository.getAll().forEach(function (pokemon){
    if(pokemon.height <= 10){
        document.write("<p> Name: " + pokemon.name + "</p> Height: " + pokemon.height + "</p>" + "<p> Type: " + pokemon.type + "</p>" + "<br>");
    } else {
        document.write("<p> Name: " + pokemon.name + "</p>" + "<p> Height: " + pokemon.height +  "- Woah, that's HUGE! </p>" + "<p> Type: " + pokemon.type + "</p>" +"<br>")
    }
});