require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./api/api');
const port = process.env.APP_PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', api);

app.listen(port, () => {
    console.log(`\nAPI is running on port ${port}.`);
});
