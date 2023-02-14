'use strict'

const pokemon_obj = {
    name: "",

}

fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 20; i++) {
        fetch_pokemon(data.results[i].url)
    }
  })

function fetch_pokemon (url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let pokemon_name = data.name;
        console.log("Pokemon name: " + pokemon_name)
        console.log(data)
    })
}

// data as a single selected pokemon // data ~= pokemon
let data = {}
/*
data.sprites.other.dream_world
data.name
data.height
data.order
data.stats[0].stat.name



*/






