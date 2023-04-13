const pokemonList = []; // create an empty array to store the Pokemon objects

fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
  .then((response) => response.json())
  .then(function (allpokemon) {
    allpokemon.results.forEach(function (pokemon) {
      fetchGenOneData(pokemon);
    });
  });

function fetchGenOneData(pokemon) {
  let url = pokemon.url;

  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      let pokemonObj = {}; // create an empty object to store the Pokemon data

      // add the relevant properties to the Pokemon object
      pokemonObj.name = pokeData.name;
      pokemonObj.sprite = pokeData.sprites.front_default;
      pokemonObj.id = pokeData.id;
      pokemonObj.moves = [
        { name: pokeData.moves[0].move.name, description: "" },
      ];

      if (pokeData.moves.length > 1) {
        pokemonObj.moves.push({
          name: pokeData.moves[1].move.name,
          description: "",
        });
      }

      pokemonObj.stats = {
        hp: pokeData.stats[0].base_stat,
        atk: pokeData.stats[1].base_stat,
        def: pokeData.stats[2].base_stat,
        sp_atk: pokeData.stats[3].base_stat,
        sp_def: pokeData.stats[4].base_stat,
        spd: pokeData.stats[5].base_stat,
      };

      // call the getMoveInfo functions to fetch the move descriptions and add them to the Pokemon object
      getMoveInfo(pokeData.moves[0].move.url)
        .then((moveData) => {
          pokemonObj.moves[0].description =
            moveData.flavor_text_entries[4].flavor_text;

          if (pokeData.moves.length > 1) {
            return getMoveInfo(pokeData.moves[1].move.url);
          } else {
            return Promise.resolve();
          }
        })
        .then((moveData) => {
          if (moveData) {
            pokemonObj.moves[1].description =
              moveData.flavor_text_entries[4].flavor_text;
          }

          pokemonList.push(pokemonObj); // add the Pokemon object to the list
          // console.log(pokemonObj); // log the Pokemon object to the console (optional)
        });
    });
}

function getMoveInfo(moveUrl) {
  return fetch(moveUrl)
    .then((response) => response.json())
    .then((moveData) => {
      return moveData;
    });
}
// all of the above creates the pokemon objects
// the below searches through the object

const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent the form from submitting

  const searchQuery = input.value.toLowerCase(); // get the search query entered by the user
  let foundMatch = false; // keep track of whether a match was found

  // loop through the pokemonList array and check for any matches
  for (let i = 0; i < pokemonList.length; i++) {
    const name = pokemonList[i].name.toLowerCase();
    const id = pokemonList[i].id.toString(); // convert the ID to a string to enable searching

    if (name.indexOf(searchQuery) !== -1 || id.indexOf(searchQuery) !== -1) {
      console.log(pokemonList[i]); // display the matching Pokemon object in the console
      foundMatch = true; // set foundMatch to true since we found a match
    }
  }

  if (!foundMatch) {
    alert("Please enter a valid Pokemon name or ID.");
  }
});
