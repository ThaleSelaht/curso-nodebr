/* 
    0 Obter um usuário
    1 Obter o numero de telefone a partir do id 
    2 Obter o endereço do usuário a partir do id
*/
function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'Alladin',
      dataNascimente: new Date(),
    })
  }, 1000)
}
function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '1199002',
      ddd: 11
    })
  }, 2000)
}
function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0  
    })
  }, 2000)
}

const usuario = obterUsuario(function resolverUsuario(error, usuario){
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
})

