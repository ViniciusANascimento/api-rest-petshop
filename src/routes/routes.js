const router = require('express')();
const bodyParser = require('body-parser');
const clientRouter = require('../routes/clients-route')

router.use(bodyParser.json());

//router.get({clientRouter})
router.get('/', (req, res) => {
    res.sendFile(process.mainModule.path + '/pages/homepage/index.html')
})

router.use(clientRouter)
module.exports = router;