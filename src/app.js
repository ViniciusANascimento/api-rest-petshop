const express = require('express');
const routers = require('./routes/v1-routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/v1-docs-swagger.json')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/v1', routers);
app.use('/v1/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));



module.exports = app;