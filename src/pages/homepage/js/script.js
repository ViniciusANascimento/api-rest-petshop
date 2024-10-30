// Adicione seu código JavaScript aqui, por exemplo:
// Para criar um alerta quando um botão for clicado:
// document.getElementById("meuBotao").addEventListener("click", function() {
//     alert("Você clicou no botão!");
// });

import * as fs from "node:fs";

document.getElementById('section-clients').addEventListener((even)=>{
    even.innerHTML =+ fs.readFileSync('./pages/clients/clients.json', 'utf8');
})