const productsData = require('../repositories/dataRepositorie')
const filter = 'products'

async function getAllProducts(req, res) {
    try{
        return  await productsData.filterFile(filter)
    }catch(err){
        return await err;
    }
};

async function getProductById(id) {
    const product = await productsData.filterFile(filter);
    console.log(product)
    const productFounded = product.find((product) => product.id == id);
    if(!productFounded){
        throw new Error('ID não encontrado');
    }
    return productFounded
};

async function addProduct(newProduct){
    const product = await productsData.filterFile(filter)
    const lastProduct = product.length -1;
    newProduct.id = product[lastProduct].id +1
    product.push(newProduct);
    return await productsData.writeFileData(filter, product);
};

async function deleteProductById(id){
    const product = await productsData.filterFile(filter);
    const productFounded = product.findIndex(product => product.id == id);
    if(!productFounded){
        throw new Error('ID não encontrado');
    }
    product.splice(productFounded, 1);
    return await productsData.writeFileData(filter, product);
}

async function updateProductById(id, updateProduct) {
    const product = await productsData.filterFile(filter);
    const productIndex = product.findIndex(product => product.id == id);

    if (productIndex == -1) throw new Error('ID não encontrado');
    if(updateProduct.id != id) throw new Error('ID informado no corpo é diferente do ID do parametro!')

    let productFounded = product.find((product) => product.id == updateProduct.id);

    if(productFounded.id != updateProduct.id) throw new Error('ID não pode ser alterado!')

    product[productIndex] = updateProduct;

    return await productsData.writeFileData(filter, product);
}

module.exports = { getAllProducts, getProductById, addProduct, deleteProductById, updateProductById};

