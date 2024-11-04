const fs = require('fs').promises;
const mainRepositorie = './src/data/mainData.json';
const saveRepositorie = './src/data/changeData.json';

function readFileData(){
    return fs.readFile(mainRepositorie,'utf-8')
        .then(data => data = JSON.parse(data))
        .catch((err) => {
            return `Problema ao carregar o arquivo de dados`;
        })
}

function filterFile(typeFilter){
    return readFileData()
        .then(data => data[typeFilter]);
}

async function writeFileData( filter, newData){
    const data = await readFileData();
    data[filter] = newData
    fs.writeFile(saveRepositorie, JSON.stringify(data),'utf-8');
    return newData;
}


module.exports = { writeFileData, filterFile}