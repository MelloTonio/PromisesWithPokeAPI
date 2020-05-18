const URL = `https://pokeapi.co/api/v2/pokemon`
const axios = require('axios')

async function obterPokemons(numero){
    const url = `${URL}/${numero}`
    const response = await axios.get(url)
    return response.data
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

document.addEventListener('click',e =>{
    const el = e.target
    const botao = document.querySelector('.botao')
    const enviar = document.querySelector('.pokeNumber')
    const pokeAmigo = document.querySelector('.PokeAmigo')
    const pokeTipo = document.querySelector('.PokeTipo')
    let habilidades = document.querySelector('.Hability')
    let src = document.getElementById("x");
    let img = document.createElement("img");

    if(el === botao){
    async function resolvePoke(){
    
       pokemons = await obterPokemons(String(enviar.value))
       enviar.value = ''

       habilidades.innerHTML = ''
       
       const url = `${pokemons.sprites.front_default}`
       src.innerHTML = ''
       img.src = `${url}`;
       src.appendChild(img);

       for(e of pokemons.abilities){
        habilidades.innerHTML += ` | ${e.ability.name} |`
       }

       pokeAmigo.innerHTML = (capitalize(pokemons.name))

       if(pokemons.types[1] === undefined){
            pokeTipo.innerHTML = `${capitalize(pokemons.types[0].type.name)}`
       }else{
           pokeTipo.innerHTML = `${capitalize(pokemons.types[0].type.name)} & ${capitalize(pokemons.types[1].type.name)}`
        }
    }
    resolvePoke()
    }
})
