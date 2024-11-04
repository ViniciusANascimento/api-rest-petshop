const productRouter = require('express')();
const productController = require('../controllers/productController')

productRouter.get('/products', productController.getAllProduct, (req, res) => {})

productRouter.get('/products/:id',productController.getProductById, (req, res) => {})

productRouter.post('/products',productController.addProduct, (req, res) => {})

productRouter.delete('/products/:id',productController.deleteProduct, (req, res) => {})

productRouter.put('/products/:id',productController.updateProduct,(req, res) => {})
module.exports = productRouter;