const employeerService = require('../services/employeerService');
const statusCode = require('../utils/status-code');

async function getAllEmployeer(req, res) {
    try {
        const employeers = await employeerService.getAllEmployeers();
        res.status(statusCode.OK).json(employeers);
    }catch (err){
        res.status(statusCode.BAD_REQUEST).send(err.message);
    }
}

async function getEmployeerById(req, res) {
    try{
        const id = req.params.id;
        const newEmployeer = await employeerService.getEmployeer(id);
        console.log(newEmployeer)
        res.status(statusCode.OK).json(newEmployeer);
    }catch(err){
        res.status(statusCode.NOT_FOUND).send(err.message);
    }
}

async function addEmployeer(req, res) {
    try{
        const bodyRequest = req.body;
        await employeerService.addEmployeer(bodyRequest);
        res.status(statusCode.CREATED).json({
            "status": "Sucesso",
            "message": "Employeere adicionado com sucesso",
            "data": bodyRequest
        });
    }catch (err){
        res.status(statusCode.BAD_REQUEST).send(err.message);
    }
}

async function deleteEmployeer(req, res) {
    try{
        const id = req.params.id;
        await employeerService.deleteEmployeerById(id);
        res.status(statusCode.CREATED).json({"status": "Sucesso",
            "message": `Employeere ${id} foi apagado do arquivo de dados.`})
    }catch(err){
        res.status(statusCode.BAD_REQUEST).send(err.message);
    }
}

async function updateEmployeer(req, res) {
    try{
        const employeerId = req.params.id;
        const dataEmployeer = req.body
        const updateEmployeer = await employeerService.updateEmployeerById(employeerId,dataEmployeer);
        res.status(statusCode.ACCEPTED).json({
            "status": "Sucesso",
            "message": `Employeere ${updateEmployeer.id} atualizado com sucesso`,
            "data": dataEmployeer})
    }catch(err){
        res.status(statusCode.BAD_REQUEST).send(err.message);
    }
}

module.exports = { getEmployeerById, getAllEmployeers: getAllEmployeer, addEmployeer, deleteEmployeer , updateEmployeer};