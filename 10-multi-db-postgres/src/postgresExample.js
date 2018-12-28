// npm install sequelize
// npm install pg-hstore pg

const Sequelize = require('sequelize')
const driver = new Sequelize(
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

async function main() {

    await Herois.create({
        nome: 'Lanterna Verde',
        poder: 'Anel'
    })
    const result = await Herois.findAll(
        { raw: true,
          attributes: ['nome'] // retorna os campos especificos do banco de dados, no caso 'nome'.
        } 
    )
    console.log('result', result)
}

main()