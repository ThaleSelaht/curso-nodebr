const Commander = require('commander')
const Database  = require('./database')
const Heroi     = require('./heroi')
async function main() {
  Commander
    .version('v1')
    .option('-n, --nome [value]', "Nome do Heroi")
    .option('-p, --poder [value]', "Poder do Heroi")

    .option('-c, --cadastrar', "Cadastrar Heroi")
    .parse(process.argv)

    const heroi = new Heroi(Commander)

    try {
      if(Commander.cadastrar) {      
        const resultado = await Database.cadastrar(heroi)
        if(!resultado) {
          console.error('Heroi não foi encontrado!')
          return;
        }
        console.log('Heroi Cadastrado com sucesso!');
        
      }
    } catch(error) {
      console.error('DEU RUIM', error)
    }
}

main()
