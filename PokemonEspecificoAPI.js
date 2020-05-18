const axios = require('axios')
const URL = `https://pokeapi.co/api/v2/pokemon`

async function obterPokemons(numero){
    const url = `${URL}/${numero}`
    const response = await axios.get(url)
    return response.data
}

obterPokemons('') //Choose a number from 0 to 807
.then(async function(pokemon){
    console.log(`Pokemon: ${pokemon.name}`)
    console.log(`Tipo: ${pokemon.types[0].type.name}`)
})
.catch(function(erro){
    console.log(erro,'erro')
})

