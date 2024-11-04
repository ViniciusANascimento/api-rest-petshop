const employeersData = require('../repositories/dataRepositorie')
const filter = 'employeers'

async function getAllEmployeers(req, res) {
    try{
        return  await employeersData.filterFile(filter)
    }catch(err){
        return await err;
    }
};

async function getEmployeer(id) {
    const employeer = await employeersData.filterFile(filter);
    const employeerFounded = employeer.find((employeer) => employeer.id == id);
    if(!employeerFounded){
        throw new Error('ID não encontrado');
    }
    return employeerFounded
};

async function addEmployeer(newEmployeers){
    const employeer = await employeersData.filterFile(filter)
    const lastEmployeers = employeer.length -1;
    newEmployeers.id = employeer[lastEmployeers].id +1
    employeer.push(newEmployeers);
    return await employeersData.writeFileData(filter, employeer);
};

async function deleteEmployeersById(id){
    const employeer = await employeersData.filterFile(filter);
    const employeerFounded = employeer.findIndex(employeer => employeer.id == id);
    if(!employeerFounded){
        throw new Error('ID não encontrado');
    }
    employeer.splice(employeerFounded, 1);
    return await employeersData.writeFileData(filter, employeer);
}

async function updateEmployeerById(id, updateEmployeer) {
    const employeer = await employeersData.filterFile(filter);
    const employeerIndex = employeer.findIndex(employeer => employeer.id == id);

    if (employeerIndex == -1) throw new Error('ID não encontrado');
    if(updateEmployeer.id != id) throw new Error('ID informado no corpo é diferente do ID do parametro!')

    let employeerFounded = employeer.find((employeer) => employeer.id == updateEmployeer.id);

    if(employeerFounded.id != updateEmployeer.id) throw new Error('ID não pode ser alterado!')

    employeer[employeerIndex] = updateEmployeer;

    return await employeersData.writeFileData(filter, employeer);
}

module.exports = { addEmployeer, getAllEmployeers, getEmployeer, deleteEmployeersById, updateEmployeerById };

