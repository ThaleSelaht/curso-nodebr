const {
  deepEqual,
  ok
}= require('assert')

const DEFAULT__ITEM__CADASTRAR = { 
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}

const database = require('./database')

describe('Suite de manipulação de Herois', function() {
    it('Deve pesquisar um heroi usando arquivos', async () => {
      const expected = DEFAULT__ITEM__CADASTRAR
      const [resultado] = await database.listar(expected.id)
      deepEqual(resultado, expected)
    })  
  /* it('Deve cadastrar um heroi, usando arquivo', async () => {
      const expected = DEFAULT__ITEM__CADASTRAR

      //
      ok(null, expected)
    }) */
})
