const axios = require('axios')
const URL = `https://pokeapi.co/api/v2/pokemon`

async function obterPokemons(numero){
    const fixo = 0
    const url = `${URL}/?offset=${fixo}&limit=${numero}`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    obterPokemons
}