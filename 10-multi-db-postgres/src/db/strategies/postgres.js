// importar interfaceCrud.js
const Icrud = require('./interfaces/intefaceCrud')
const Sequelize = require('sequelize')

class Postgres extends Icrud {
    constructor() {
        super()
        this.driver = null
        this._herois = null
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
    async defineModel() {
        this._herois = this._driver.define('herois', {
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
        await this._herois.sync()
    }
    async create(item) {
        const {
            dataValues
        } = await this._herois.create(item)

        return dataValues
    }
    async update(id, item) {
        return this._herois.update(item, {where: {id : id}})
    }
    async delete(id) {
        const query = id ? {id} : {}
        return this._herois.destroy({where: query})
    }
    async read(item = {}) {
        return this._herois.findAll({where: item, raw: true})
    }
    async connect() {
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
        await this.defineModel()
    }
}

// tornar a classe publica
module.exports = Postgres