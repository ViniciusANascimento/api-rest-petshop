const router = require('express')();
const bodyParser = require('body-parser');
const clientRouter = require('./files/clients-route')
const employeerRouter = require('./files/employeer-router')
const productRouter = require('./files/products-route')

router.use(bodyParser.json());
router.get('/', (req, res) => {
    res.sendFile(process.mainModule.path + '/pages/homepage/index.html')
})

router.use(clientRouter);
router.use(employeerRouter);
router.use(productRouter);
module.exports = router;