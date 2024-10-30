const router = require('express')();
const bodyParser = require('body-parser');

const clientsService  = require('../services/clientService');

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.sendFile(process.mainModule.path + '/pages/homepage/index.html')
})

router.get('/clients', clientsService.allInfoClients,(req, res) => {
    console.log('Exibindo todos os clientes.')
})

router.get('/clients/:id',clientsService.findClientsById, (req, res) => {
    console.log(`Parametro de id passado é ${req.params.id}`);
})



module.exports = router;