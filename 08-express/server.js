const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use((req, res, next) => {
    // The use method allowed for DI on the request, also known
    // as a middle method. Something that takes place before 
    // the request is sent
    var profile =  {
        name: "Cody",
        age: 33
    };
    req.profile = profile;
    next();
}).get("/profile", (req, res) => {
    res.send(req.profile);
});

app.listen(3000);