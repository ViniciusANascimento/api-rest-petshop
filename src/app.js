const express = require('express');
const routers = require('./routes/routes')

function createApp(){
    const app = express();
    app.use(express.json());
    app.use('/', routers);
    return app;
}

module.exports = createApp;