const express = require('express');
const favicon = require('serve-favicon');

const app = express();
// express.static needs a directory name that is absolute.
// __dirname always exists in nodeJS - diurectory name of the current file
const staticAsserts = __dirname + "/public";
const faviconPath = __dirname + "/public/favicon.ico"
app
    .use(express.static(staticAsserts)) // ex[ress static plugin, using as middleware
    .use(favicon(faviconPath))
    .get("/api/profile", (req, res) => {
    var profile = {name: "Cody"};
    res.send(profile);
});

app.listen(3000);