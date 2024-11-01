const fs = require('fs').promises;
const dataRepositories = './src/repositories/data.json';

function readFileData(){
    return fs.readFile(dataRepositories,'utf-8')
        .then(data => {
            const clientJson = JSON.parse(data);
            return clientJson.clients;

        })
        .catch((err) => {
            return `Problema ao carregar os dados de clientes`;
        })
}

function writeFileData(newClient){
    console.log(newClient)
    //return fs.writeFile(dataRepositories, JSON.stringify(newClient,null,2));
}


module.exports = { readFileData, writeFileData}