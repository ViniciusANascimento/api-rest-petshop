const clientRouter = require('express')();
const clientController = require('../../controllers/clientController')

clientRouter.get('/clients', clientController.getAllClients, (req, res) => {})

clientRouter.get('/clients/:id',clientController.getClientById, (req, res) => {})

clientRouter.post('/clients',clientController.addClient, (req, res) => {})

clientRouter.delete('/clients/:id',clientController.deleteClient, (req, res) => {})

clientRouter.put('/clients/:id',clientController.updateClient,(req, res) => {})
module.exports = clientRouter;