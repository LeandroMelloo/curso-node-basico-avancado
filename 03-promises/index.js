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
    }, 1000);
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
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "Rua: Saguairu",
      numero: 415
    });
  }, 2000);
}

// criação de um objeto promise = 'usuarioPromise' que irá receber o valor do 'obterUsuario'.
const usuarioPromise = obterUsuario();
// criação de um objeto promise = 'telefonePromise' que irá receber o valor do 'obterTelefone'.
const telefonePromise = obterTelefone();
// para manipular o sucesso utilizamos a função .then
// para manipular os erros utilizamos a função .catch
usuarioPromise
  .then(function(usuario) {
    return obterTelefone(usuario.id)
        .then(function resolverTelefone(resultadoTelefone) {
            return { 
                usuario: usuario, 
                telefone: resultadoTelefone 
            };
        });
    })
  .then(function(resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id);
        return endereco.then(function resolverEndereco(resultadoEndereco) {
            return { 
                usuario: resultado.usuario, 
                telefone: resultado.telefone,
                endereco: resultadoEndereco
            };
        });
    })
  .then(function(resultado) {
    console.log(`
    Usuario: ${resultado.usuario.id}, ${resultado.usuario.nome},
    Telefone: (${resultado.telefone.ddd}), ${resultado.telefone.telefone}
    Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero},
  `);
  })
  .catch(function(erro) {
    console.log("Erro:", erro);
  });
