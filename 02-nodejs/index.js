/*
--------------------------------> Criar nosso objetivo <--------------------------------------------  
1° obter um usuario.
2° obter um numero de telefone de um usuario a partir de seu id.
3° obter um endereço de um usuario a partir de seu id.
*/

//-----------------> Funções para simular uma busca no banco de dados, para ser assincrono <--------

//-----------------> Função de callback verifica se a função terminou <-----------------------------

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: "Leandro",
      dataNascimento: new Date()
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      telefone: 990120911,
      ddd: 11
    });
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "Rua: Saguairu",
      numero: 415
    });
  }, 2000);
}

function resolverUsuario(erro, usuario) {
  console.log("usuario:", usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
  // null || "" || 0 === false
  if (error) {
    console.erro("Não foi resolver usuario", error);
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    // null || "" || 0 === false
    if (error1) {
      console.erro1("Não foi resolver telefone", error);
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      // null || "" || 0 === false
      if (error2) {
        console.erro1("Não foi resolver endereco", error);
        return;
      }
      console.log(`
        Id: ${usuario.id}
        Nome: ${usuario.nome},
        Endereco: ${endereco.rua}, ${endereco.numero},
        Telefone: (${telefone.ddd}), ${telefone.telefone}
      `);
    });
  });
});
