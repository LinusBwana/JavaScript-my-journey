# JavaScript fetch()
- JavaScript fetch is a function used for making HTTP requests to fetch resources. (JSON style data, images, files)  
- Simplifies aschronous data fecthing and in JavaScript and used for intercating with APIs to retrieve and send data asychronously over the web.
- fetch(url, {option})


## Pokémon Fetcher — Practicing the `fetch()` API in JavaScript
This small project is a hands-on practice I did to understand how the **`fetch()`** function works in JavaScript.

I used the [PokéAPI](https://pokeapi.co) to fetch Pokémon data and explore how to handle asynchronous operations using both **Promises** and **`async/await`**.

The goal was to deeply understand how `fetch` works, when and how to handle its response, and how to use it in both Promise-based and async/await-based syntax.

## What I Aimed to Learn

- How the `fetch()` function works under the hood
- How to handle its returned Promise
- How to structure `fetch()` calls using both `.then()` and `async/await`
- How to handle JSON responses and errors
- How to interact with the DOM based on fetched API data


## Technologies Used

- HTML
- JavaScript (ES6+)
- Fetch API
- PokéAPI


## Example 1 – Using Promises

In this example, I used the traditional *.then()* and *.catch()* syntax.  
I did this to understand how *fetch()* returns a **Promise**, and how to handle that promise step-by-step using *.then()* to parse the JSON, and *.catch()* to catch any errors.

I also added a basic check to make sure the response exists before parsing it.

**`Code:`**
```javascript
fetch('https://pokeapi.co/api/v2/pokemon/Charmeleon')
    .then(response => {
        if (!response) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```


## Example 2 – Using async/await + DOM Interaction
This version allows the user to search for any Pokémon using an input field and a button. When the button is clicked, an *async* function fetches the Pokémon’s data and updates an image on the page with the sprite.

### Examples of Pokemon I searched
- Charmeleon
- Charmander
- Squirtle
- Pikachu
- Mewtwo
- Chikorita
- Cyndaquil
- Totodile
- Torchic
- Mudkip

**`Code:`**
```javascript
document.getElementById("search-pokemon").addEventListener('click', () => fetchData());

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemanSprite');

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.log(error);
    }
}
```

### Explanation:
- I used *async/await* to make the code cleaner and easier to follow.
- I did this to understand how I can write asynchronous code that looks more like synchronous code.
- I also added DOM interaction so I could fetch data based on user input and display it visually on the page. This helped me connect how the data I get from *fetch()* can be used directly in the UI.

## What I Learnt
- *fetch* is a global function that returns a **Promise**
- The response from *fetch()* isn’t the actual data I need to call *.json()* on it to get the parsed data
- async/await makes asynchronous code cleaner and more readable
- How to hook *fetch()* logic to UI elements with event listeners and DOM manipulation