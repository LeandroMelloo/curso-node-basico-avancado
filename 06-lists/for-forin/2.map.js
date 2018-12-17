const service = require("./service");

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length - 1; indice++) {
            const resultado = callback(this[indice], indice)
            novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado;
}
async function main() {
  try {
    const results = await service.obterPessoas(`a`);
    // 1° exemplo
    // const names = [];
    // results.results.forEach(function (item) {
    // names.push(item.name)
    // });
    
    // 2° exemplo 
    // .map -> retorna uma nova função
    // const names = results.results.map(function (pessoa) {
    // return pessoa.name
    // })

    // 3° exemplo
    // const names = results.results.map(pessoa => pessoa.name)

    // 4° exemplo 
    const names = results.results.meuMap(function (pessoa, indice) {
        return `[${indice}]${pessoa.name}`
    })
    console.log(`Nome:`, names);
  } catch (error) {
    console.error(`Erro na solicitação do serviço`, error);
  }
}

main();
