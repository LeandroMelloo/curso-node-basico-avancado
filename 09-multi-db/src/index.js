// importando a classe 'contextStrategy'
const ContextStrategy = require('./db/strategies/base/contextStrategy.js')

// importando a classe 'MongoDB'
const MongoDB = require('./db/strategies/mongodb')

// importando a classe 'Postgres'
const Postgres = require('./db/strategies/postgres')

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()