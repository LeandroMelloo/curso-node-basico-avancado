/*
--------------------------------> Criar nosso objetivo <--------------------------------------------  
1° obter um usuario.
2° obter um numero de telefone de um usuario a partir de seu id.
3° obter um endereço de um usuario a partir de seu id.
*/

//-----------------> Funções para simular uma busca no banco de dados, para ser assincrono <--------

//-----------------> Função de callback verifica se a função terminou <-----------------------------

// importando um modulo interno no node.js.
const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    // se der erro -> reject(erro)
    // se der sucesso -> resolve
    setTimeout(function() {
      return resolve({
        id: 1,
        nome: "Leandro",
        dataNascimento: new Date()
      });
    }, 500);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    // se der erro -> reject(erro)
    // se der sucesso -> resolve
    setTimeout(function() {
      return resolve({
        telefone: 990120911,
        ddd: 11
      });
    }, 500);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "Rua: Saguairu",
      numero: 415
    });
  }, 500);
}

// 1° Passo - adicionar a palavra async -> automaticamente ele irá retornar uma Promise.
main()
async function main(){
    try {

        // iniciando o tempo de execução.
        console.time('medida-promise');

        const usuario = await obterUsuario();
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEnderecoAsync(usuario.id);

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id) // não depende do telefone, e sim do 'usuario.id'.
        ])
            const endereco = resultado[1];
            const telefone = resultado[0];

        console.log(`
        Usuario: ${usuario.id}, ${usuario.nome},
        Telefone: (${telefone.ddd}), ${telefone.telefone}
        Endereco: ${endereco.rua}, ${endereco.numero},
      `);

        // finalizo o tempo de execução.
        console.timeEnd('medida-promise');

    } catch (erro) {
        console.erro('Erro', erro);
    }
}