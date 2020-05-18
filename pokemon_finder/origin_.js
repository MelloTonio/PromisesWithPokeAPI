const URL = `https://pokeapi.co/api/v2/pokemon`
const axios = require('axios')
const Path = require('path')

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

    if(el === botao){
    async function resolvePoke(){
       x = await obterPokemons(String(enviar.value))
       let habilidades = document.querySelector('.Hability')
       habilidades.innerHTML = ''
       const url = `${x.sprites.front_default}`
       var src = document.getElementById("x");
       src.innerHTML = ''
       var img = document.createElement("img");
       img.className = "imagem"
       img.src = `${url}`;
       src.appendChild(img);
       let ok = 0
       for(e of x.abilities){
        habilidades.innerHTML += ` | ${e.ability.name} |`
       }
       pokeAmigo.innerHTML = (capitalize(x.name))
       if(x.types[1] === undefined){
        pokeTipo.innerHTML = `${capitalize(x.types[0].type.name)}`
       }else{pokeTipo.innerHTML = `${capitalize(x.types[0].type.name)} & ${capitalize(x.types[1].type.name)}`
           }
      
    }
    resolvePoke()
    }
})
