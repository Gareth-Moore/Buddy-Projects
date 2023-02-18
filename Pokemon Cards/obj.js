
 
 function fetchGenOneData(pokemon){
  let url = pokemon.url //this is saving the pokemon url to a variable to us in a fetch.
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
    
    
// data.name
let pokemon_name = pokeData.name;
console.log("Pokemon name: " + pokemon_name)

//sprites
let pokemon_sprite = pokeData.sprites.front_default;
console.log("Pokemon sprite: " + pokemon_sprite)


//console.log(pokeData)
// data.order
let pokemon_id = pokeData.id;
console.log("id: " + pokemon_id)

// move 1

let pokemon_move_one = pokeData.moves[0].move.name;
console.log("move: " + pokemon_move_one)

// move 2

let pokemon_move_two = pokeData.moves[1].move.name;
console.log("move: " + pokemon_move_two)

// data.stats[0].stat.name this could be made simpler using a for loop
let pokemon_hp = pokeData.stats[0].base_stat;
console.log(" hp: " + pokemon_hp)
let pokemon_atk = pokeData.stats[1].base_stat;
console.log(" atk: " + pokemon_atk)
let pokemon_def = pokeData.stats[2].base_stat;
console.log(" def: " + pokemon_def)
let pokemon_sp_atk = pokeData.stats[3].base_stat;
console.log(" sp.atk: " + pokemon_sp_atk)
let pokemon_sp_def = pokeData.stats[4].base_stat;
console.log(" sp_def: " + pokemon_sp_def)
let pokemon_spd = pokeData.stats[5].base_stat;
console.log(" spd: " + pokemon_spd)
    })
 
  }
  



  fetch('https://pokeapi.co/api/v2/pokemon/?limit151') // you can use the "limit" here as part of the API to limit the amount of pokemon
   .then(response => response.json())
   .then(function(allpokemon){
   allpokemon.results.forEach(function(pokemon){
     fetchGenOneData(pokemon); 
   })
  })
 

  function createPokemon(pokeData){

   //to be created
   
    
  }