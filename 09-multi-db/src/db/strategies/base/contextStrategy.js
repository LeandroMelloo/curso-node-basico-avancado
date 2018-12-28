// importar interfaceCrud.js
const Icrud = require('./../interfaces/intefaceCrud')

// classe concreta, trabalhando com o contexto de BD e seguindo a const 'Icrud'.
class ContextStrategy extends Icrud {
    constructor(strategy) {
        super()
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

// tornar a classe publica
module.exports = ContextStrategy