const axios = require('axios');

// URL do SWAPI.
const URL = `https://tempapi.proj.me/api/p0JeIOtuD`

// async => manipular promisses internamente dessa função.
async function obterPessoas(nomes) {
    const url = `${URL}`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    obterPessoas
}