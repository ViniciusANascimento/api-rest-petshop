const fs = require('fs')
const pathFile = './src/repositories/clients.json'

function allInfoClients(req, res, next) {
    fs.readFile(pathFile, 'utf-8',(err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('Erro ao tentar ler o arquivo de Clientes')
        }
        res.json(JSON.parse(data));
    })
    next()
}

function findClientsById(req, res, next) {
    const clientId = parseInt(req.params.id);
    fs.readFile(pathFile, 'utf-8',(err, data) => {
        if (err) {
            console.error(err)
            return res.status('500').send(err);
        }
        const client = JSON.parse(data);
        const clientFound = client.clients.find((client) => client.id === clientId);
        if (clientFound) {
            res.json(clientFound);
        }
    })

    next()
}

module.exports = {allInfoClients, findClientsById};