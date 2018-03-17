const bodyParser = require('body-parser');
const express = require("express");
const users = require('./routes/users');
const app = express();

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))   // this allows for form encoded data
    .use('/users', users);

app.listen(3000);


// -10:30