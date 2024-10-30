const createApp = require('./app');
const port = process.env.PORT;
const host = process.env.HOST;

const app = createApp();

app.listen(port, () => {
    console.log(
        `Servidor inciado com sucesso.
         url: ${host}:${port}`)
});