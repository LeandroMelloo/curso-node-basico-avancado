// importar interfaceCrud.js
const Icrud = require('./interfaces/intefaceCrud')
const Sequelize = require('sequelize')

class Postgres extends Icrud {
    constructor() {
        super()
        this.driver = null
        this._herois = null
        this._connect()
    }
    isConnected() {
        try {
            this._driver.authenticate()
            console.log('Acesso ao BD')
            return true;
            
        } catch (error) {
            console.log('Falha ao acessar o BD', error)
            return false;
        }
    }
    defineModel() {
        this._herois = driver.define('herois', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                required: true
            },
            poder: {
                type: Sequelize.STRING,
                required: true
            }
        }, {
            tableName: 'TB_HEROIS', // tabela que estamos usando
            freezeTableName: false, // não alterar as opções dos bancos
            timestamps: false // não criar nada sozinho
    
        })
        await Herois.sync()
    }
    create(item) {
        console.log('O item foi salvo com sucesso no Postgres')
    }
    _connect() {
        this._driver = new Sequelize(
            'heroes', // database
            'leandromello', // usuario do db
            '123', // senha do db
            {
                host: 'localhost',
                dialect: 'postgres', // tipo do driver
                quoteIdentifiers: false, // ignora alguns padrões
                operatorsAliases: false // ignora as opções de metodos invalidos
            }           
        )
    }
}

// tornar a classe publica
module.exports = Postgres