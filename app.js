var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var api = require('./api/api');

require('./env');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

app.listen(process.env.PORT, () => {
    console.log("\nAPI is running on port " + process.env.PORT + ".");
});
