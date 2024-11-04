const clientData = require('../repositories/dataRepositorie')
const filter = 'clients'

async function getAllClients(req, res) {
    try{
        return  await clientData.filterFile(filter)
    }catch(err){
        return await err;
    }

};

async function getClient(id) {
    const client = await clientData.filterFile(filter);
    const clientFounded = client.find((client) => client.id == id);
    if(!clientFounded){
        throw new Error('ID não encontrado');
    }
    return clientFounded
};

async function addClient(newClient){
    const client = await clientData.filterFile(filter)
    const lastClient = client.length -1;
    newClient.id = client[lastClient].id +1
    client.push(newClient);
    return await clientData.writeFileData(filter, client);
};

async function deleteClientById(id){
    const client = await clientData.filterFile(filter);
    const clientFounded = client.findIndex(client => client.id == id);
    if(!clientFounded){
        throw new Error('ID não encontrado');
    }
    client.splice(clientFounded, 1);
    return await clientData.writeFileData(filter, client);
}

async function updateClientById(id, updateClient) {
    const client = await clientData.filterFile(filter);
    const clientIndex = client.findIndex(client => client.id == id);

    if (clientIndex == -1) throw new Error('ID não encontrado');
    if(updateClient.id != id) throw new Error('ID informado no corpo é diferente do ID do parametro!')

    let clientFounded = client.find((client) => client.id == updateClient.id);

    if(clientFounded.id != updateClient.id) throw new Error('ID não pode ser alterado!')

    client[clientIndex] = updateClient;

    return await clientData.writeFileData(filter, client);
}

module.exports = {addClient, getAllClients, getClient, deleteClientById, updateClientById };

