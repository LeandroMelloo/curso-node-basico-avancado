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
}

class MongoDB extends Icrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi salvo com sucesso no MongoDB')
    }
}

class Postgres extends Icrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi salvo com sucesso no Postgres')
    }
}

// classe concreta, trabalhando com o contexto de BD.
class ContextStrategy {
    constructor(strategy) {
        this._database = strategy
    }

    create(item) {
        return this._database.create(item)
    }
    read(item) {
        return this._database.read(item)
    }
    update(id, item) {
        return this._database.update(id, item)
    }
    delete(id) {
        return this._database.delete(id)
    }
}

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()

contextMongo.read()
