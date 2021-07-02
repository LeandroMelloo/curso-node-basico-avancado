/*
  Criar nosso objetivo:

- 1° obter um usuario.
- 2° obter um numero de telefone de um usuario a partir de seu id.
- 3° obter um endereço de um usuario a partir de seu id.

*/

function obterUsuario() {
  // se der erro -> reject(erro)
  // se der sucesso -> resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error('Error'))
      return resolve({
        id: 1,
        nome: "Leandro Moreira Paulino de Mello",
        dataNascimento: new Date()
      });
    }, 1000);
  });
};

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
};

function obterEndereco(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    // se der erro -> reject(erro)
    // se der sucesso -> resolve
    setTimeout(function () {
      return resolve({
        rua: "Rua: Reims",
        numero: 120
      });
    });
  }, 2000);
}

// criação de um objeto promise = 'usuarioPromise' que irá receber o valor do 'obterUsuario'.
const usuarioPromise = obterUsuario();
// para manipular o sucesso utilizamos a função .then
// para manipular os erros utilizamos a função .catch
usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id)
      .then(function resolverTelefone(resultadoTelefone) {
        return { 
          usuario: usuario,
          telefone: resultadoTelefone 
        };
      });
  })
  .then(function (resultado) {
    return obterEndereco(resultado.usuario.id)
      .then(function resolverEndereco(resultadoEndereco) {
        return {
          usuario: resultado.usuario, 
          telefone: resultado.telefone,
          endereco: resultadoEndereco
        };
      });
  })
  .then(function (resultado) {
    console.log(`
    Id: ${resultado.usuario.id},
    Nome: ${resultado.usuario.nome},
    Endereco: ${resultado.endereco.rua} - ${resultado.endereco.numero},
    Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
  `);
  })
  .catch(function(erro) {
    console.log("Erro:", erro);
  });
