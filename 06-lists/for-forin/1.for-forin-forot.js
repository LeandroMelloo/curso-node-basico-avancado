const service = require("./service");

async function main() {
  try {
    const result = await service.obterPessoas();

    const nomes = [];

    console.time("for");

    //--------------------------------> FOR <-------------------------------------
    for (let i = 0; i < result.length; i++) {
      const pessoa = result[i];

      nomes.push(pessoa.nome);
    }

    console.timeEnd("for");

    //-------------------------------> FOR IN <-----------------------------------

    /*console.time("forIn");

    for (let i in result.results) {
      const pessoa = result.results[i];

      names.push(pessoa.name);
    }

    console.timeEnd("forIn");*/

    //-------------------------------> FOR OF <------------------------------------

    /*console.time("forOf");

    for (pessoa of result.results) {
        names.push(pessoa.name)
    }

    console.timeEnd("forOf")

    console.log(`Nomes:`, names);*/
  } catch (error) {
    console.error(`Erro interno:`, error);
  }
}

main();
