const axios = require('axios');

// URL do SWAPI.
const URL = `https://swapi.co/api/people`

// async => manipular promisses internamente dessa função.
async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

obterPessoas('r2')
.then(function (resultado) {
    console.log('resultado', resultado);
})
.catch(function (erro){
    console.erro('Não foi possível efetuar a busca', erro);
})

module.exports = {
    obterPessoas
}