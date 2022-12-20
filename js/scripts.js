let ampharos = {
    name: "Ampharos",
    height: 4.58,
    type: "electric",
}

let hooh = {
    name: "Ho-oh",
    height: 12.5,
    type: ["fire","flying"],
}

let mewtwo = {
    name: "Mewtwo",
    height : 6.58,
    type: "psychic",
}

let pokemonList = [ampharos, hooh, mewtwo]

/*print pokemon names + heights

for (let i=0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name + pokemonList[i].height + "<br>")
}

+/

// for loop for length of array */
for (let i=0; i < pokemonList.length; i++){
// set condition for specific key-value of objects in array +/
// <br> tag to display each object on a new line */
    if(pokemonList[i].height <= 10){
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + "<br>");
    } else {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Woah, that's HUGE!" + "<br>")
    }
}