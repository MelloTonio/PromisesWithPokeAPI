const axios = require('axios')
const URL = `https://pokeapi.co/api/v2/pokemon`

async function obterPokemons(numero){
    const fixo = 0
    const url = `${URL}/?offset=${fixo}&limit=${numero}`
    const response = await axios.get(url)
    return response.data
}

async function main(){
    try{
        let pokeNames = []
        const result = await obterPokemons('50')
/*      for(let i = 0; i <= result.results.length-1; i++){
            let pokemon = result.results[i]
            pokeNames.push(pokemon.name)
        } */
/*         for(let i in result.results){
            pokemon = (result.results[i])
            pokeNames.push(pokemon.name)
        }
 */
        for(pokemon of result.results){
            pokeNames.push(pokemon.name)
        } 
        console.log(pokeNames)
    }
    catch(error){
        console.error(error)
    }
    
}
main()
