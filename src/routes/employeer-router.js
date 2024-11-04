const employeerRouter = require('express')();
const employeerController = require('../controllers/employeerController')

employeerRouter.get('/employeers', employeerController.getAllEmployeers, (req, res) => {})

employeerRouter.get('/employeers/:id',employeerController.getEmployeerById, (req, res) => {})

employeerRouter.post('/employeers',employeerController.addEmployeer, (req, res) => {})

employeerRouter.delete('/employeers/:id',employeerController.deleteEmployeer, (req, res) => {})

employeerRouter.put('/employeers/:id',employeerController.updateEmployeer,(req, res) => {})
module.exports = employeerRouter;