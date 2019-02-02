const {
  deepEqual,
  ok
}= require('assert')

const DEFAULT__ITEM__CADASTRAR = { 
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}

describe('Suite de manipulação de Herois', function() {
    it('Deve cadastrar um heroi, usando arquivo', async () => {
      const expected = DEFAULT__ITEM__CADASTRAR

      //
      ok(null, expected)
    })
})
