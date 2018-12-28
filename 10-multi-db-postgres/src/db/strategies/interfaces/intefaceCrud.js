// criar uam classe customizada de erro, pra quando um método não for implementado. 
class NotImplementedException extends Error {
    constructor() {
        super("Not Implemented Exception")
    }
}

// simular uma interface, todos os métodos de cadastro, remoção, atualização e etc.
class Icrud {
    create(item) {
        throw new NotImplementedException()
    }

    read(query) {
        throw new NotImplementedException()
    }

    update(id, item) {
        throw new NotImplementedException()
    }

    delete(id) {
        throw new NotImplementedException()
    }
    isConnected() {
        throw new NotImplementedException()
    }
}

// tornar a classe publica
module.exports = Icrud