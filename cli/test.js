const {
  deepEqual,
  ok
} = require('assert')

const DEFAULT__ITEM__CADASTRAR = { 
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}
const DEFAULT__ITEM__ATUALIZAR = {
  nome: 'Lanterna Verde',
  poder: 'Energia do Anel',
  id: 2
}
const database = require('./database')

describe('Suite de manipulação de Herois', function() {
  before(async () => {
    await database.cadastrar(DEFAULT__ITEM__CADASTRAR)
    await database.cadastrar(DEFAULT__ITEM__ATUALIZAR)
  })
  it('Deve pesquisar um heroi usando arquivos', async () => {
    const expected = DEFAULT__ITEM__CADASTRAR
    const [resultado] = await database.listar(expected.id)
    deepEqual(resultado, expected)
  })  
  it('Deve cadastrar um heroi, usando arquivo', async () => {
    const expected = DEFAULT__ITEM__CADASTRAR
    const resultado = await database.cadastrar(DEFAULT__ITEM__CADASTRAR)
    const [actual] = await database.listar(DEFAULT__ITEM__CADASTRAR.id)

    deepEqual(actual, expected)
  })
  it('Deve remover heroi por id', async () => {
    const expected = true;
    const resultado = await database.remover(DEFAULT__ITEM__CADASTRAR.id)

    deepEqual(resultado, expected)
  })
  it('Deve atualizar heroi pelo id', async () => {
    const novoDado = {
      nome: 'Batman',
      poder: 'Dinheiro'
    }
    const expected = {
      ...DEFAULT__ITEM__ATUALIZAR,
      ...novoDado
    }
    await database.atualizar(DEFAULT__ITEM__ATUALIZAR.id, novoDado)
    const [resultado] = await database.listar(DEFAULT__ITEM__ATUALIZAR.id)
    deepEqual(resultado, expected)
  })
})
