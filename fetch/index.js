// fetch is a Function used for making HTTP requests to fetch resources. (JSON style data, images, files)
// simplifies aschronous data fecthing and in JavaScript and used for intercating with APIs to retrieve and send data asychronously over the web.
// fetch(url, {option})


// example 1
fetch('https://pokeapi.co/api/v2/pokemon/Charmeleon')
    .then(response => {
        if(!response){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));


// example 2 - Using async wait
document.getElementById("search-pokemon").addEventListener('click', () => fetchData())

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemanSprite');

        imgElement.src = pokemonSprite
        imgElement.style.display = "block";
    }
    catch(error){
        console.log(error);
    }
}