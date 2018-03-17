const bodyParser = require('body-parser');
const express = require("express");
const users = require('./routes/users');
const app = express();

// using body parser allows to offload the logic into middlewhere
// We dont have to think to ourselves, if it's a GET or a POST
// or if the content is JSON encoded or urlencoded
app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))   // this allows for form encoded data
    .use('/users', users);

app.listen(3000);


// -10:30