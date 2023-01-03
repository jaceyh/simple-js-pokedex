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

//for function to print array
function printArrayDetails(){
    for (let i = 0; i < pokemonList.length; i++){
        document.write("<p>" + pokemonList[i].name + "</p>" + "<p> Height: " + pokemonList[i].height + "</p>" + "<p> Type: " + pokemonList[i].type + "</p>" + "<br>");
      // printing pokemonList[i]’s other details
    }
}

printArrayDetails();
