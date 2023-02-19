/*const js_pokemon_object = [ TODO not sure how to do this....
  {
       pokemon_id: {
          name: pokemon_name,
          sprite: pokemon_sprite,
          //weight: 220,
          height: 12,
      },
          move: {
              first_move: pokemon_move_one,
              flavor_txt_one: pokemon_move_one_desc.flavor_text_entries[0].flavor_text,
              second_move: pokemon_move_two,
              flavor_txt_two: pokemon_move_two_desc.flavor_text_entries[0].flavor_text,
          },
          stats: {
            hp: pokemon_hp,
            atk:pokemon_atk,
            def:pokemon_def,
            spatk:pokemon_sp_atk,
            spdef:pokemon_sp_def,
            spd:pokemon_spd,
          }
          
      }
]
console.log(js_pokemon_object) */


fetch('https://pokeapi.co/api/v2/pokemon/?limit=151') // you can use the "limit" here as part of the API to limit the amount of pokemon
   .then(response => response.json())
   .then(function(allpokemon){
   allpokemon.results.forEach(function(pokemon){
     fetchGenOneData(pokemon); 
     
   })
  })
 


function getMoveTwoInfo(pokeData) {
  var pokemon_move_two_desc = pokeData.moves[1].move.url //this fetches the description for move one
  fetch(pokemon_move_two_desc)
  .then(response => response.json())
  .then(function(pokemon_move_two_desc) {
    console.log(pokemon_move_two_desc.flavor_text_entries[4].flavor_text)

  })
  }
  



function getMoveOneInfo(pokeData) {
var pokemon_move_one_desc = pokeData.moves[0].move.url //this fetches the description for move two
fetch(pokemon_move_one_desc)
.then(response => response.json())
.then(function(pokemon_move_one_desc) {
  console.log(pokemon_move_one_desc.flavor_text_entries[4].flavor_text)

  
 
})
}


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
console.log("first move: " + pokemon_move_one)
getMoveOneInfo(pokeData)

// move 2

let pokemon_move_two = pokeData.moves[1].move.name;
console.log("second move: " + pokemon_move_two)
getMoveTwoInfo(pokeData)

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
  



  
  