require('dotenv').config();
require('./configs/mongodb');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./api/api');
const port = process.env.APP_PORT || 3000;



console.log(process.env)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', api);

app.listen(/*port*/3333, () => {
    console.log(`\nAPI is running on port ${port}.`);
});
