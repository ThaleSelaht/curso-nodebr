/* 
    0 Obter um usuário
    1 Obter o numero de telefone a partir do id 
    2 Obter o endereço do usuário a partir do id
*/
//importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)
function obterUsuario() {
  //quando der algum problema --> Reject(ERRO)
  //quando tudo der certo --> RESOLVE
  return new Promise(function resolvePromise(resolve, reject){
    setTimeout(function () {
      /* return reject(new Error('Deu ruim de verdade!')) */
      return resolve({
        id: 1,
        nome: 'Alladin',
        dataNascimente: new Date(),
      })
    }, 1000)
  })
}
function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject){
    setTimeout(() => {
      return resolve({
        telefone: '1199002',
        ddd: 11
      })
    }, 2000)
  })
  
}
function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0  
    })
  }, 2000)
}
//1º Passo: Adicionar a palavra-chave async -> automaticamente ela retornará uma promise
async function main(){
  try {
    console.time('Medida promise')
    const usuario = await obterUsuario()  
    /* const telefone = await obterTelefone(usuario.id)
    const endereco = await obterEnderecoAsync(usuario.id) */

    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])
    const telefone = resultado[0]
    const endereco = resultado[1]
    console.log(`
      Nome: ${usuario.nome}
      Endereço: ${endereco.rua}, ${endereco.numero}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
    `);
    console.timeEnd('Medida promise')
  } catch (error) {
      console.log('DEU RUIM', error);      
  }
}
main()
/* const usuarioPromise = obterUsuario()
//Para manipular o sucesso, usamos a função .then()
//Para manipular o erros, usamos a função .catch()

usuarioPromise
  .then(function(usuario){
    return obterTelefone(usuario.id)
      .then(function resolverTelefone(result){
        return {
          usuario: {
            nome: usuario.nome,
            id: usuario.id
          },
          telefone: result
        }
      })
  })
  .then(function(resultado){
    return obterEnderecoAsync(resultado.usuario.id)
      .then(function resolverEndereco(result){
        return {
          usuario: resultado.usuario,
          telefone: resultado.telefone,
          endereco: result
        }
      })
      
  })
  .then(function(resultado){
    console.log(`
      Nome: ${resultado.usuario.nome}
      Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
      Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone} 
    `)
  })
  .catch(function(error){
    console.log('Deu ruim!', error)   
  }) */

/* obterUsuario(function resolverUsuario(error, usuario){
  if(error) {
    console.log("DEU RUIM em USUÁRIO", error);
    return;  
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
    if(error1) {
      console.log("DEU RUIM em TELEFONE", error);
      return;  
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
      if(error2) {
        console.log("DEU RUIM em ENDERECO", error);
        return;
      }
      console.log(`
        Nome: ${usuario.nome},
        Endereço: ${endereco.rua}, ${endereco.numero}
        Telefone: (${telefone.ddd}) ${telefone.telefone}
      `);
    })
  })
})*/
