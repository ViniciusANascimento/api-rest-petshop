const clientService = require('../services/clientService');
const statusCode = require('../utils/status-code');

async function getAllClients(req, res) {
    try {
        const clients = await clientService.getAllClients();
        res.status(statusCode.OK).json(clients);
    }catch (err){
        res.status(statusCode.BAD_REQUEST).send(err.message);
    }
}

async function getClientById(req, res) {
    try{
        const id = req.params.id;
        const newClient = await clientService.getClient(id);
        console.log(newClient)
        res.status(statusCode.OK).json(newClient);
    }catch(err){
        res.status(statusCode.NOT_FOUND).send(err.message);
    }
}

async function addClient(req, res) {
    try{
        const bodyRequest = req.body;
        await clientService.addClient(bodyRequest);
        res.status(statusCode.CREATED).json({
            "status": "Sucesso",
            "message": "Cliente adicionado com sucesso",
            "data": bodyRequest
        });
    }catch (err){
        res.status(statusCode.BAD_REQUEST).send(err.message);
    }
}

async function deleteClient(req, res) {
    try{
        const id = req.params.id;
        await clientService.deleteClientById(id);
        res.status(statusCode.CREATED).json({"status": "Sucesso",
            "message": `Cliente ${id} foi apagado do arquivo de dados.`})
    }catch(err){
        res.status(statusCode.BAD_REQUEST).send(err.message);
    }
}

async function updateClient(req, res) {
    try{
        const clientId = req.params.id;
        const dataClient = req.body
        const updateClient = await clientService.updateClientById(clientId,dataClient);
        res.status(statusCode.ACCEPTED).json({
            "status": "Sucesso",
            "message": `Cliente ${updateClient.id} atualizado com sucesso`,
            "data": dataClient})
    }catch(err){
        res.status(statusCode.BAD_REQUEST).send(err.message);
    }
}

module.exports = { getClientById, getAllClients, addClient, deleteClient , updateClient};