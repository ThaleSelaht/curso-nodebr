const { get } = require('axios')

const URL = `https://swapi.co/api/people`

async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`
  const result = await get(url)
  /* console.log(JSON.stringify(result.data)); */
  
  return result.data.results.map(mapearPessoas)
}

function mapearPessoas(pessoa) {
  return {
    nome: pessoa.name,
    peso: pessoa.height
  }
}

module.exports = {
  obterPessoas
}
