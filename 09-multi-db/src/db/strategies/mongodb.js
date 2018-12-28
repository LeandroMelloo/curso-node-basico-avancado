// importar interfaceCrud.js
const Icrud = require('./interfaces/intefaceCrud')


class MongoDB extends Icrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi salvo com sucesso no MongoDB')
    }
}

// tornar a classe publica
 module.exports = MongoDB