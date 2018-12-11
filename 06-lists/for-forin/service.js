const axios = require('axios');

// URL do SWAPI.
const URL = `https://swapi.co/api/people`

// async => manipular promisses internamente dessa função.
async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    obterPessoas
}