// importar interfaceCrud.js
const Icrud = require('./interfaces/intefaceCrud')

class Postgres extends Icrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi salvo com sucesso no Postgres')
    }
}

// tornar a classe publica
module.exports = Postgres