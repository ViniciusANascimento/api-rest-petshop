const productService = require('../services/productService');
const statusCode = require('../utils/status-code');

async function getAllProduct(req, res) {
    try {
        const products = await productService.getAllProducts();
        res.status(statusCode.OK).json(products);
    }catch (err){
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(err.message);
    }
}

async function getProductById(req, res) {
    try{
        const id = req.params.id;
        const newProduct = await productService.getProductById(id);
        console.log(newProduct)
        res.status(statusCode.OK).json(newProduct);
    }catch(err){
        res.status(statusCode.NOT_FOUND).send(err.message);
    }
}

async function addProduct(req, res) {
    try{
        const bodyRequest = req.body;
        await productService.addProduct(bodyRequest);
        res.status(statusCode.CREATED).json({
            "status": "Sucesso",
            "message": "Produto adicionado com sucesso",
            "data": bodyRequest
        });
    }catch (err){
        res.status(statusCode.BAD_REQUEST).send(err.message);
    }
}

async function deleteProduct(req, res) {
    try{
        const id = req.params.id;
        await productService.deleteProductById(id);
        res.status(statusCode.CREATED).json({"status": "Sucesso",
            "message": `Produto ${id} foi apagado do arquivo de dados.`})
    }catch(err){
        res.status(statusCode.BAD_REQUEST).send(err.message);
    }
}

async function updateProduct(req, res) {
    try{
        const productId = req.params.id;
        const dataProduct = req.body
        const updateProduct = await productService.updateProductById(productId,dataProduct);
        res.status(statusCode.ACCEPTED).json({
            "status": "Sucesso",
            "message": `Produto ${updateProduct.id} atualizado com sucesso`,
            "data": dataProduct})
    }catch(err){
        res.status(statusCode.BAD_REQUEST).send(err.message);
    }
}

module.exports = { getProductById, getAllProduct, addProduct, deleteProduct , updateProduct};