require('dotenv').config();
require('./utils/dollar-require');
require('./db/mongodb');

const appSettings = require('./configs').app;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./api/api');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = appSettings.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', api);

app.listen(port, () => {
    console.log(`\nAPI is running on port ${port}.`);
});
