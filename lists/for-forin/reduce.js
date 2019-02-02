const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
  let total = typeof valorInicial !== undefined ? valorInicial : this[0]
  for(let index = 0; index <= this.length -1; index++) {
    total = callback(total, this[index])
  }
  return total
}

async function main () {
  try {
    const { results } = await obterPessoas(`a`)
    const pesos = results.map(item => parseInt(item.height))
    console.log('Pesos', pesos)
    
    /* const total = pesos.reduce((anterior, proximo) => {
      return anterior + proximo
    }, 0) */
    const minhaLista = [
      ['Erick', 'Wendel'],
      ['NodeBR', 'Nerdzão']
    ]
    const total = minhaLista.meuReduce((anterior, proximo) => {
      return anterior.concat(proximo)
    }, [])
    .join(', ')
    
    console.log('Total:', total)
    
  } catch (error) {
    console.log('DEU RUIM!', error)
  }
}
main()
